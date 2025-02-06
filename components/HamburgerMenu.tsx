import { mobileNavbar } from "@/lib/utils";
import Link from "next/link";

type HamburgerMenuProp = {
  closeMenu: () => void;
};

const HamburgerMenu = ({ closeMenu }: HamburgerMenuProp) => {
  return (
    <div
      onClick={closeMenu}
      className="fixed inset-0 bg-slate-900 z-50 bg-opacity-50 "
    >
      <ul className="absolute top-0 right-0 w-1/2 max-w-[250px] space-y-2 bg-slate-950 min-h-screen text-gray-300 p-5 shadow-lg">
        {mobileNavbar.map(({ link, label }) => (
          <li className="text-right" key={link}>
            <Link
              className="hover:text-blue-800 hover:border-b border-blue-800 duration-100"
              href={link}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
