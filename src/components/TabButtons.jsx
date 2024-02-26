import PropTypes from "prop-types";

const TabButton = ({ children }) => {
  return (
    <>
      <button className="bg-red-400 m-1 px-4 py-2 rounded-xl">{children}</button>
    </>
  );
};

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabButton;
