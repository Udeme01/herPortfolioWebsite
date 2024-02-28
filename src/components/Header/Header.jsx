import { Nav } from "../Header/Nav";
import logo from "../../assets/img/favicon.ico";
import Icons from "../Header/Social-icons";

export const Header = () => {
  return (
    <header className="header px-4 sticky top-0 z-50">
      {/* header wrapper start */}
      <div className="header-wrapper">
        {/* header left start */}
        <div className="header-left">
          <div className="logo-wrapper">
            <img src={logo} alt="company logo" />
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
