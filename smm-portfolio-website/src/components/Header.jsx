import { Nav } from "./Nav";
import logo from "../assets/img/logo.ico";
import Icons from "./Social-icons";

export const Header = () => {
  return (
    <header className="header container mx-auto">
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
