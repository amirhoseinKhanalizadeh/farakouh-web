"use client";

import { navbarLinks } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavbarClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md flex justify-between mx-auto md:px-20 sticky top-0 z-50 w-full h-full items-center flex-row-reverse  p-5 md:p-8">
      <div className="flex justify-center flex-row-reverse items-center gap-x-2">
        <Menu
          className="cursor-pointer md:hidden duration-200"
          onClick={handleNavbarClick}
        />

        <Image
          className="md:w-16 md:h-16"
          src="/next.svg"
          alt="logo"
          width={48}
          height={48}
        />
      </div>
      <nav className="hidden md:flex flex-row-reverse justify-center items-center">
        <ul className="flex flex-row-reverse gap-x-3 justify-center items-center ">
          {navbarLinks.map(({ link, label }) => (
            <Link
              className={` hover:text-blue-600 hover:border-b hover:border-blue-600 ${
                pathname === link ? "text-blue-700" : "text-gray-700"
              }`}
              key={label}
              href={link}
            >
              {label}
            </Link>
          ))}
        </ul>
      </nav>
      <Link
        href="/user"
        className="cursor-pointer text-center text-blue-600 hover:border-b hover:border-blue-600 duration-200 md:text-xl"
      >
        ورود
      </Link>

      {isOpen ? <HamburgerMenu closeMenu={handleNavbarClick} /> : null}
    </header>
  );
};
