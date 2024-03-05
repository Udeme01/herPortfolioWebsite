import { MobileNav } from "./MobileNav";
import logo from "../../assets/img/favicon.ico";
import { DesktopNav } from "./DesktopNav";
// import { DesktopNav } from "./DesktopNav";

export const Header = () => {
  return (
    <header className="header sticky top-0 z-50 bg-white shadow-sm xl:w-90 xl:mx-auto xl:p-0">
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
