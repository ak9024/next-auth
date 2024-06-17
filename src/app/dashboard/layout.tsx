import Link from "next/link";

const links = [
  {
    href: "#",
    title: "Home",
  },
];

const Layout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <div>
      <div className="border-b border-gray-100">
        <div className="container mx-auto flex max-w-7xl items-center justify-end p-4 md:justify-between md:px-6">
          <nav className="hidden items-center space-x-4 text-sm md:flex">
            {links.map((link) => (
              <Link
                className="text-gray-900"
                href={link?.href}
                key={link?.title}
              >
                {link?.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-36 flex max-w-7xl justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
