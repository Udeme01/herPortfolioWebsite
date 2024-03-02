import logo from "../../assets/img/favicon.ico";
import { ROUTES } from "../../data";
import { useState } from "react";
import Icons from "../Header/Social-icons";

import { Squash as Hamburger } from "hamburger-react";

const mobileNavStyles =
  "fixed top-0 right-1/4 bottom-0 left-0 bg-orange-50 min-h-screen shadow-2xl lg:hidden";
const mobileNavList = "list-none mt-8 px-8 py-2 border-b border-b-black";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-red-200 font-body text-xl lg:hidden">
      <span className="absolute top-0 right-0 border-8 border-white">
        <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
      </span>
      {isOpen && (
        <nav className={mobileNavStyles}>
          <div className="py-2 px-6">
            <img className="rounded-full" src={logo} alt="logo" />
          </div>
          <ul>
            {ROUTES.map((route) => {
              const { title, href, id } = route;
              return (
                <li key={title} id={id} className={mobileNavList}>
                  <a href={href}>{title}</a>
                </li>
              );
            })}
          </ul>
          <Icons />
        </nav>
      )}
    </div>
  );
};
