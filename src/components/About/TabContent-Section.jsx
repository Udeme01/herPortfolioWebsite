import PropTypes from "prop-types";
import { EXAMPLES } from "../../data";

const Section = ({ topic }) => {
  return (
    <section className="tabContent font-body font-regular mb-2">
      <div>
        {EXAMPLES[topic].person.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">{item.title}</h3>
              <h3 className="percent">{item.percent}</h3>
            </div>
            {item.details}
          </div>
        ))}
      </div>
    </section>
  );
};

Section.propTypes = {
  topic: PropTypes.string,
};

export default Section;
