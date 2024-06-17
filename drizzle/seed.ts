import bcrypt from "bcrypt";
import { NewUser } from "./schema";
import { insertUser } from "./db";

async function main() {
  const dateTime = new Date();
  const hashedPassword = await bcrypt.hash("admin", 10);
  const newUser: NewUser = {
    name: "user",
    email: "adiatma.mail@gmail.com",
    password: hashedPassword,
    createdAt: dateTime,
  };
  const response = await insertUser(newUser);
  console.log({ response });
  process.exit();
}

main();
