import Link from "next/link";

const Page: React.FC<{}> = (): React.ReactNode => (
  <div className="container grid items-center gap-4 px-4 text-center md:px-4 lg:gap-10">
    <div className="space-y-3">
      <h1 className="text-4-xl font-bold tracking-tighter sm:text-5xl md:texrt-6xl">
        Welcome to home page!
      </h1>
    </div>
    <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
      <Link
        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
        href="/signup"
      >
        sign-up
      </Link>
    </div>
  </div>
);

export default Page;
