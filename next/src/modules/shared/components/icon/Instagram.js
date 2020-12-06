import React from "react";
import PropTypes from "prop-types";

const Instagram = ({ className, height = "32", width = "32" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M28 0H4C1.8 0 0 1.8 0 4V28C0 30.2 1.8 32 4 32H28C30.2 32 32 30.2 32 28V4C32 1.8 30.2 0 28 0ZM16 12C19.7 12 20 16 20 16C20 16 20.1 20 16 20C11.9 20 12 16 12 16C12 16 12.3 12 16 12ZM28 26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V16C4 14.9 4.9 14 6 14H8.3C8.1 14.6 8 15.3 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 15.3 23.9 14.6 23.7 14H26C27.1 14 28 14.9 28 16V26ZM28 8C28 9.1 27.1 10 26 10H24C22.9 10 22 9.1 22 8V6C22 4.9 22.9 4 24 4H26C27.1 4 28 4.9 28 6V8Z" />
  </svg>
);

Instagram.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Instagram.defaultProps = {
  className: "",
  height: "32",
  width: "32",
};

export { Instagram };
