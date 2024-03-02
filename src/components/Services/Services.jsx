// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SERVICES } from "../../data";
import ServicesListItem from "./Services-List-Items";

const ServiceHeader = () => {
  return (
    <>
      <section className="font-body px-6 mt-12 xl:w-90 xl:mx-auto">
        <h1 className="text-4xl font-bold text-orange-700 mb-3 text-center lg:text-6xl">
          My Services
        </h1>
        <p className="text-regular text-orange-700 text-sm tracking-wider leading-6 font-regular md:mb-8 lg:text-md">
          As an experienced social media manager, I offer a comprehensive range
          of services tailored to meet the unique needs of my clients.
        </p>

        {/* services rendered */}
        <section>
          <ul className="md:grid md:grid-rows-2 md:grid-cols-2 md:gap-6 2xl:grid-cols-3">
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
