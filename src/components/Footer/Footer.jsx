import footerImg from "../../assets/img/footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../../data";

const Footer = () => {
  return (
    <footer className="font-body bg-footerColor shadow-2xl">
      <section className="p-6 text-center md:flex md:items-center md:justify-between xl:w-90 xl:mx-auto">
        {/* image and name */}
        <div className="md:p-2">
          <img
            className="rounded-full w-28 mx-auto"
            src={footerImg}
            alt="footer logo"
          />
          <h1 className="font-bold mb-2 text-orange-700 md:mt-4 md:mb-0">
            Akogun Believe
          </h1>
        </div>
        {/* links and copyright msg */}
        <div className="md:p-2">
          <div className="flex justify-center py-4">
            {ICONS.map((brands) => {
              return (
                <li className="list-none ml-2 p-1 first:ml-0" key={brands.id}>
                  <a
                    className="hover:text-orange-700"
                    target="_blank"
                    href={brands.href}
                  >
                    <FontAwesomeIcon icon={brands.icon} />
                  </a>
                </li>
              );
            })}
          </div>
          <h2 className="text-orange-700 font-bold">
            Copyright &copy; 2024. All Rights Reserved.
          </h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
