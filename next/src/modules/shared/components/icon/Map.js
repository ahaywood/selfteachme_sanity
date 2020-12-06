import React from "react";
import PropTypes from "prop-types";

const Map = ({ className, height = "32", width = "32" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.4118 32C15.6739 32 15.0038 31.5689 14.6988 30.8969C13.4132 28.0715 7 13.7581 7 9.41176C7 4.22212 11.2221 0 16.4118 0C21.6014 0 25.8235 4.22212 25.8235 9.41176C25.8235 13.7581 19.4122 28.0715 18.1247 30.8969C17.8198 31.5689 17.1515 32 16.4118 32ZM16.4118 3.76471C13.2984 3.76471 10.7647 6.29835 10.7647 9.41176C10.7647 11.6386 13.7633 19.3148 16.4118 25.4626C19.0621 19.3129 22.0588 11.6367 22.0588 9.41176C22.0588 6.29835 19.5252 3.76471 16.4118 3.76471Z" />
    <path d="M16.4119 12.2353C17.9713 12.2353 19.2354 10.9712 19.2354 9.41179C19.2354 7.85239 17.9713 6.58826 16.4119 6.58826C14.8525 6.58826 13.5884 7.85239 13.5884 9.41179C13.5884 10.9712 14.8525 12.2353 16.4119 12.2353Z" />
  </svg>
);

Map.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Map.defaultProps = {
  className: "",
  height: "32",
  width: "32",
};

export { Map };
