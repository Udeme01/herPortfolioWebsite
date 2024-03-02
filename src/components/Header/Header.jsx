import { Nav } from "../Header/Nav";
import logo from "../../assets/img/favicon.ico";
import Icons from "../Header/Social-icons";

export const Header = () => {
  return (
    <header className="header sticky top-0 z-50 bg-orange-50">
      {/* header wrapper start */}
      <div className="flex items-center justify-between">
        {/* header left start */}
        <div className="header-left">
          <div className="pt-2 px-6">
            <img src={logo} alt="logo" className="rounded-full" />
          </div>
          <Nav />
        </div>
        {/* header left end */}

        {/* header right start */}
        <div className="header-right">
          {/* social area start */}
          <div className="header-social">
            <Icons />
          </div>
          {/* social area end */}
        </div>
        {/* header right end */}
      </div>
      {/* header wrapper end */}
    </header>
  );
};
