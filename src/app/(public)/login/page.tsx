import Login from "./form";

const Page: React.FC<{}> = () => {
  return (
    <div className="flex flex-col p-4 lg:w-1/3">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500">Enter your credentials to login.</p>
      </div>
      <div className="mt-6">
        <Login />
      </div>
    </div>
  );
};

export default Page;
