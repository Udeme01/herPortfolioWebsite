import PropTypes from "prop-types";

const TabButton = ({ children }) => {
  return (
    <>
      <button className="bg-orange-700 m-1 px-4 py-2 rounded-xl text-sm font-light">{children}</button>
    </>
  );
};

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabButton;