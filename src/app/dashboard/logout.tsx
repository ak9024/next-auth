"use client";

import { logout } from "@/src/app/auth/auth";

const Logout: React.FC<{}> = () => (
  <button
    className="mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-gray-50 hover:bg-gray-900/90 h-10 px-4 py-2"
    onClick={() => logout()}
  >
    logout
  </button>
);

export default Logout;
