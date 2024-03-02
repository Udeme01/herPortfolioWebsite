import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../../data";

const Icons = () => {
  return (
    <>
      <ul className="flex items-end justify-center py-10 px-4 min-h-96">
        {ICONS.map((brands) => {
          return (
            <li key={brands.icon} className="ml-8 last:ml-0 first:ml-0">
              <a href={brands.href}>
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
