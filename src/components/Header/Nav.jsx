import logo from "../../assets/img/logo.ico";
import ListItems from "./NavListItem";

export const Nav = () => {
  return (
    <>
      <nav className="absolute top-0 right-1/2 bottom-0 left-0 bg-orange-300 min-h-screen hidden">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="rounded-full pt-2" />
        </div>
        <ul>
          <ListItems />
        </ul>
      </nav>
    </>
  );
};
