import PropTypes from "prop-types";

const TabButton = ({ children, onSelect }) => {
  return (
    <>
      <button
        onClick={onSelect}
        className="bg-orange-700 text-white m-1 px-4 py-2 rounded-xl text-sm font-light"
      >
        {children}
      </button>
    </>
  );
};

TabButton.propTypes = {
  children: PropTypes.string,
  onSelect: PropTypes.func,
};

export default TabButton;
