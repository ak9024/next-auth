"use server";

import { db } from "@/drizzle/db";
import { FormState, LoginFormSchema, SignUpFormSchema } from "./definitions";
import { eq } from "drizzle-orm";
import { users } from "@/drizzle/schema";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "./stateless-session";

export const signup = async (
  _: FormState,
  formData: FormData,
): Promise<FormState> => {
  // 1. validate fields
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData?.get("name"),
    email: formData?.get("email"),
    password: formData?.get("password"),
  });

  // if any form fields are invalid, return earyly
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. prepare data for insertation
  const { name, email, password } = validatedFields?.data;

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (existingUser) {
    return {
      message: "Email already exists, please use a different email or login!",
    };
  }

  // hash the user password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. insert the user password
  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  if (!user) {
    return {
      message: "An error occured while create user!",
    };
  }

  const userId = user.id.toString();
  await createSession(userId);
};

export const login = async (
  _: FormState,
  formData: FormData,
): Promise<FormState> => {
  // 1. Validate fields
  const validateFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  //  if any error in validation process
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // 2. find data from db to compare with payload
  const user = await db.query.users.findFirst({
    where: eq(users.email, validateFields.data.email),
  });

  if (!user) {
    return {
      message: "Invalid login credentials.",
    };
  }

  const passwordMatch = await bcrypt.compare(
    validateFields.data.password,
    user.password,
  );

  if (!passwordMatch) {
    return {
      message: "Invalid login credentials.",
    };
  }

  // 3. create and insert session
  const userId = user.id.toString();
  await createSession(userId);
};

export const logout = async () => {
  deleteSession();
};
