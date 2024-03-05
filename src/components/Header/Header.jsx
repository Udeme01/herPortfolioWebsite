import { MobileNav } from "./MobileNav";
import logo from "../../assets/img/favicon.ico";
import { DesktopNav } from "./DesktopNav";
import { useState } from "react";

const headerStyles = "header sticky z-50 xl:w-90 xl:mx-auto xl:p-0";
const active = "sticky top-0 z-50 bg-white shadow-sm xl:w-90 xl:mx-auto";

export const Header = () => {
  const [color, setColor] = useState(false);
  const changeNavColor = () => {
    let innerHeight = 150;
    if (window.scrollY >= innerHeight) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeNavColor);
  return (
    <header className={color ? active : headerStyles}>
      <div className="flex items-center justify-between">
        <div className="header-left">
          <div className="py-2 px-6">
            <img src={logo} alt="logo" className="rounded-full" />
          </div>
        </div>

        <div className="header-right">
          <div className="header-social">{/* <Icons /> */}</div>
        </div>
      </div>
      <MobileNav />
      <DesktopNav />
    </header>
  );
};
