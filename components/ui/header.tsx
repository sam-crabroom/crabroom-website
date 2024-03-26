import react from "react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import logo from "@/public/images/crabroom-logo.webp";

export default function Header() {
  return (
    <header className="header w-full z-30 h-20 flex items-center justify-between mt-0 p-5 pb-0">
      {/* Logo */}
      <div>
        <Link href="/" className="block" aria-label="Cruip">
          <Image
            src={logo}
            alt="crabroom-logo"
            className="w-40 lg:w-60 h-auto"
          />
        </Link>
      </div>

      


      {/* Desktop navigation */}
      {/* <nav className="ml-auto">
        // Desktop sign in links
        <ul className="flex items-center">
          <li>
            <Link
              href="/signin"
              className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
            >
              
            </Link>
          </li>
          <li>
            <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
              Sign up
            </Link>
          </li>
        </ul>
      </nav> */}

      {/* <MobileMenu /> */}
    </header>
  );
}
