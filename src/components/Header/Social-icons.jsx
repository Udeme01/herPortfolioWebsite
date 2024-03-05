import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../../data";

const Icons = () => {
  return (
    <>
      <ul className="flex items-end justify-center py-10 px-4 lg:p-0 lg:absolute lg:top-0 lg:right-8 lg:bottom-3">
        {ICONS.map((brands) => {
          return (
            <li key={brands.id} className="ml-4 p-2 first:ml-0">
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
      </ul>
    </>
  );
};

export default Icons;
