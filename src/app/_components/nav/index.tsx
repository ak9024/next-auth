import Link from "next/link";

const links = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
];

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1 5 font-sans text-base font-medium loading-relaxed text-inherit anti-aliased"
        >
          Brand
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden mr-4">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {links?.map((link) => (
                <Link href={link.href} className="flex items-center">
                  {link?.title}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
