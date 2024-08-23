import { Navigation } from "@/src/app/_components/nav";

const Layout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto mt-36 flex max-w-7xl justify-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
