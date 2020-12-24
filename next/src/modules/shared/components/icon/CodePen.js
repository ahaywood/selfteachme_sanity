import React from "react";
import PropTypes from "prop-types";

const CodePen = ({ className, height = "32", width = "32" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 0C7.16418 0 0 7.16418 0 16C0 24.8358 7.16418 32 16 32C24.8358 32 32 24.8358 32 16C32 7.16418 24.8426 0 16 0ZM16 29.38C8.62431 29.38 2.62687 23.3825 2.62687 16.0068C2.62687 8.63113 8.62431 2.63369 16 2.63369C23.3757 2.63369 29.3731 8.63113 29.3731 16.0068C29.3731 23.3825 23.3757 29.38 16 29.38Z" />
    <path d="M25.8934 12.8751C25.8934 12.8615 25.8865 12.8478 25.8865 12.841C25.8797 12.8137 25.8797 12.7933 25.8729 12.7728C25.8661 12.7591 25.8661 12.7455 25.8592 12.7318C25.8524 12.7114 25.8456 12.6909 25.8388 12.6704C25.832 12.6568 25.8251 12.6432 25.8183 12.6295C25.8115 12.609 25.7978 12.5886 25.791 12.5749C25.7842 12.5613 25.7774 12.5476 25.7637 12.534C25.7501 12.5135 25.7433 12.4999 25.7296 12.4794C25.7228 12.4658 25.7091 12.4521 25.7023 12.4453C25.6887 12.4316 25.675 12.4112 25.6614 12.3975C25.6477 12.3839 25.6409 12.3771 25.6273 12.3634C25.6136 12.3498 25.5931 12.3361 25.5795 12.3225C25.5659 12.3156 25.5522 12.302 25.5386 12.2952C25.5317 12.2952 25.5317 12.2884 25.5249 12.2815L16.4776 6.24997C16.191 6.05893 15.8226 6.05893 15.536 6.24997L6.48867 12.2815C6.48185 12.2815 6.48185 12.2884 6.47502 12.2952C6.46138 12.302 6.44773 12.3156 6.43409 12.3225C6.42044 12.3361 6.39997 12.3498 6.38632 12.3634C6.37268 12.3771 6.36586 12.3839 6.35221 12.3975C6.33856 12.4112 6.32492 12.4248 6.31127 12.4453C6.30445 12.4589 6.2908 12.4726 6.28398 12.4794C6.27033 12.493 6.25669 12.5135 6.24986 12.534C6.24304 12.5476 6.23622 12.5613 6.22257 12.5749C6.20893 12.5954 6.2021 12.609 6.19528 12.6295C6.18846 12.6432 6.18163 12.6568 6.17481 12.6704C6.16799 12.6909 6.16116 12.7114 6.15434 12.7318C6.14752 12.7455 6.14752 12.7591 6.1407 12.7728C6.13387 12.7933 6.12705 12.8205 6.12705 12.841C6.12705 12.8547 6.12023 12.8683 6.12023 12.8751C6.1134 12.9092 6.1134 12.9502 6.1134 12.9843V19.0159C6.1134 19.05 6.1134 19.0909 6.12023 19.125C6.12023 19.1387 6.12705 19.1523 6.12705 19.1591C6.13387 19.1864 6.13387 19.2069 6.1407 19.2274C6.14752 19.241 6.14752 19.2547 6.15434 19.2683C6.16116 19.2888 6.16799 19.3092 6.17481 19.3297C6.18163 19.3434 6.18846 19.357 6.19528 19.3707C6.2021 19.3911 6.21575 19.4116 6.22257 19.4252C6.22939 19.4389 6.23622 19.4525 6.24986 19.4662C6.26351 19.4866 6.27033 19.5003 6.28398 19.5208C6.2908 19.5344 6.30445 19.5481 6.31127 19.5549C6.32492 19.5685 6.33856 19.589 6.35221 19.6026C6.36586 19.6163 6.37268 19.6231 6.38632 19.6368C6.39997 19.6504 6.42044 19.664 6.43409 19.6777C6.44773 19.6845 6.46138 19.6982 6.47502 19.705C6.48185 19.705 6.48185 19.7118 6.48867 19.7186L15.536 25.7502C15.6793 25.8457 15.843 25.8935 16.0068 25.8935C16.1705 25.8935 16.3343 25.8457 16.4776 25.7502L25.5181 19.7255C25.5249 19.7255 25.5249 19.7186 25.5317 19.7118C25.5454 19.705 25.559 19.6913 25.5727 19.6845C25.5863 19.6709 25.6068 19.6572 25.6204 19.6436C25.6341 19.6299 25.6409 19.6231 25.6546 19.6095C25.6682 19.5958 25.6818 19.5822 25.6955 19.5617C25.7023 19.5481 25.716 19.5344 25.7228 19.5276C25.7364 19.5139 25.7501 19.4935 25.7569 19.473C25.7637 19.4594 25.7705 19.4457 25.7842 19.4321C25.7978 19.4116 25.8047 19.3979 25.8115 19.3775C25.8183 19.3638 25.8251 19.3502 25.832 19.3365C25.8388 19.3161 25.8456 19.2956 25.8524 19.2751C25.8592 19.2615 25.8592 19.2478 25.8661 19.2342C25.8729 19.2137 25.8797 19.1864 25.8797 19.166C25.8797 19.1523 25.8865 19.1387 25.8865 19.1318C25.8934 19.0977 25.8934 19.0568 25.8934 19.0227V12.9911C25.9002 12.9502 25.8934 12.9161 25.8934 12.8751ZM16.8528 8.54933L23.5189 12.9911L20.5373 14.9834L16.8528 12.5203V8.54933ZM15.1539 8.54933V12.5135L11.4695 14.9766L8.49464 12.9843L15.1539 8.54933ZM7.81234 14.5809L9.94112 16.0069L7.81234 17.4329V14.5809V14.5809ZM15.1539 23.4576L8.48782 19.0159L11.4627 17.0235L15.1471 19.4866V23.4576H15.1539ZM16 18.0129L12.991 16.0001L16 13.9873L19.0089 16.0001L16 18.0129ZM16.8528 23.4576V19.4935L20.5373 17.0304L23.5121 19.0227L16.8528 23.4576ZM24.1944 17.4261L22.0656 16.0001L24.1944 14.5741V17.4261Z" />
  </svg>
);

CodePen.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

CodePen.defaultProps = {
  className: "",
  height: "32",
  width: "32",
};

export { CodePen };