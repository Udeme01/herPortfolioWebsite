import PropTypes from "prop-types"

const ServicesListItem = ({ image, title, description }) => {
  return (
    <li>
      <div className="p-1 m-2 text-center py-12 rounded-2xl bg-orange-200">
        {image}
        <h2 className="text-orange-700 font-bold py-6 text-xl">{title}</h2>
        <p className="text-orange-700">{description}</p>
      </div>
    </li>
  );
};

ServicesListItem.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default ServicesListItem;
