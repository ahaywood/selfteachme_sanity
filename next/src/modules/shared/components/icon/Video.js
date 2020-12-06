import React from "react";
import PropTypes from "prop-types";

const Video = ({ className, height = "32", width = "32" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.1113 14.5555V23.2222L20.3336 18.8889L13.1113 14.5555Z" />
    <path d="M0.111328 3V26.1111C0.111328 27.7043 1.40699 29 3.00022 29H29.0002C30.5934 29 31.8891 27.7043 31.8891 26.1111V3H0.111328ZM11.6669 8.77778L13.8336 5.88889H21.778L19.6113 8.77778H11.6669ZM3.00022 5.88889H10.2224L8.05577 8.77778H3.00022V5.88889ZM29.0017 26.1111H3.00022V11.6667H29.0002L29.0017 26.1111ZM23.2224 8.77778L25.3891 5.88889H29.0002V8.77778H23.2224Z" />
  </svg>
);

Video.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Video.defaultProps = {
  className: "",
  height: "32",
  width: "32",
};

export { Video };
