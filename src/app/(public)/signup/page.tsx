"use client";

import SignUp from "./form";

const Page: React.FC<{}> = (): React.ReactNode => {
  return (
    <div className="flex flex-col p-4 lg:w-1/3">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-gray-500">Enter your information to get started</p>
      </div>
      <div className="mt-6">
        <SignUp />
      </div>
    </div>
  );
};

export default Page;
