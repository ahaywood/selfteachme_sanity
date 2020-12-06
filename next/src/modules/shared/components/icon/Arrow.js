import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ className, height = "32", width = "32" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 17.5V13.5H21V5.5L31 15.5L21 25.5V17.5H2.5Z" />
  </svg>
);

Arrow.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Arrow.defaultProps = {
  className: "",
  height: "32",
  width: "32",
};

export { Arrow };
