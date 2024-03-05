// import logo from "../../assets/img/favicon.ico";
import { ROUTES } from "../../data";
import Icons from "../Header/Social-icons";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// const mobileNavStyles =
//   "fixed top-0 right-1/4 bottom-0 left-0 bg-orange-50 min-h-screen shadow-2xl lg:hidden";
// const mobileNavList = "list-none mt-8 px-8 py-2 border-b border-b-black";

export const DesktopNav = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="hidden lg:block absolute top-0 left-0 right-0 font-body font-bold">
          <ul className="hidden lg:flex lg:items-center lg:justify-center">
            {ROUTES.map((route) => {
              const { title, href, id } = route;
              return (
                <li className="p-2 m-3" key={id}>
                  <Link to={href} smooth>
                    <a className="hover:text-orange-700 hover:transition hover:delay-75 hover:duration-200 hover:ease-out">
                      {title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Icons />
        </nav>
      </div>
    </BrowserRouter>
  );
};
