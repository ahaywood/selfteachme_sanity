import React from "react";
import PropTypes from "prop-types";

const Dribbble = ({ className, height = "32", width = "32" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 32C7.2 32 0 24.8 0 16C0 7.2 7.2 0 16 0C24.8 0 32 7.2 32 16C32 24.8 24.8 32 16 32ZM29.5 18.2C29 18 25.3 16.9 21 17.6C22.8 22.5 23.5 26.5 23.7 27.3C26.7 25.3 28.9 22 29.5 18.2ZM21.3 28.6C21.1 27.4 20.3 23.2 18.4 18.2H18.3C10.6 20.9 7.8 26.2 7.6 26.7C9.9 28.5 12.8 29.6 16 29.6C17.9 29.7 19.7 29.3 21.3 28.6ZM5.8 25.2C6.1 24.7 9.9 18.5 16.9 16.2C17.1 16.1 17.3 16.1 17.4 16C17.1 15.2 16.7 14.4 16.3 13.7C9.5 15.7 2.9 15.7 2.3 15.6C2.3 15.7 2.3 15.9 2.3 16C2.3 19.5 3.7 22.7 5.8 25.2ZM2.6 13.2C3.2 13.2 8.8 13.2 15.2 11.5C12.9 7.5 10.5 4.1 10.1 3.6C6.4 5.5 3.5 9 2.6 13.2ZM12.8 2.7C13.2 3.2 15.7 6.6 17.9 10.7C22.8 8.9 24.8 6.1 25.1 5.8C22.7 3.7 19.5 2.4 16 2.4C14.9 2.4 13.8 2.5 12.8 2.7ZM26.6 7.4C26.3 7.8 24 10.7 19 12.8C19.3 13.5 19.6 14.1 19.9 14.8C20 15 20.1 15.3 20.2 15.5C24.7 14.9 29.3 15.8 29.7 15.9C29.6 12.7 28.5 9.7 26.6 7.4Z" />
  </svg>
);

Dribbble.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Dribbble.defaultProps = {
  className: "",
  height: "32",
  width: "32",
};

export { Dribbble };
