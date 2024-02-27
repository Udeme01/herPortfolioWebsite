import PropTypes from "prop-types";
import { Fragment } from "react";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <Fragment>
      <button
        className={`bg-transparent text-black border border-orange-700 m-1 px-4 py-2 rounded-xl text-sm font-light ${
          isSelected ? "active" : ""
        }`}
        onClick={onSelect}
      >
        {children}
      </button>
    </Fragment>
  );
};

TabButton.propTypes = {
  children: PropTypes.string,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default TabButton;
