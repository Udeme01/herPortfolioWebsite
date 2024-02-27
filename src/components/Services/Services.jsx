// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SERVICES } from "../../data";
import ServicesListItem from "./Services-List-Items";

const ServiceHeader = () => {
  return (
    <>
      <section className="font-body px-6 mt-12">
        <h1 className="text-3xl font-medium text-orange-700 mb-3 text-center">
          My Services
        </h1>
        <p className="text-regular text-orange-700 text-sm tracking-wider leading-6 font-regular">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          quam consequatur recusandae, repudiandae corporis, reiciendis
          temporibus labore asperiores perspiciatis molestiae necessitatibus
          inventore consequuntur omnis aperiam porro quas, explicabo voluptates
          aspernatur!
        </p>

        {/* services rendered */}
        <section>
          <ul>
            {SERVICES.map((serviceItems) => (
              <ServicesListItem key={serviceItems.title} {...serviceItems} />
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default ServiceHeader;
