import { getUser } from "../auth/profile";
import Logout from "./logout";

const Page: React.FC<{}> = async () => {
  const user = await getUser();
  return (
    <div>
      <p>Hello {user?.email} welcome to dashboard page!</p>
      <Logout />
    </div>
  );
};

export default Page;
