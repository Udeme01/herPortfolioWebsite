import logo from "../assets/img/logo.ico";

export const Nav = () => {
  return (
    <>
      <nav className="mobile-nav">
        <div className="logo-wrapper">
          <img src={logo} alt="company logo" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
