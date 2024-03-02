import logo from "../../assets/img/logo.ico";
import { ROUTES } from "../../data";

export const DesktopNav = () => {
  return (
    <>
      <nav className="hidden lg:flex">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          {ROUTES.map((route) => {
            const { title, href } = route;
            return (
              <li
                key={route.title}
              >
                <a href={href}>{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
