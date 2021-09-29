import React from 'react';
import PropTypes from 'prop-types';

const Pinterest = ({ className, height = '32', width = '32' }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.2009 21.2061C13.4014 25.6036 12.4019 29.8012 9.30368 32C8.40419 25.3038 10.7029 20.3066 11.8023 15.0096C9.90334 11.9114 12.0022 5.71488 15.8999 7.31397C20.6972 9.2129 11.8023 18.8075 17.6989 20.0068C23.8954 21.3061 26.494 9.2129 22.5962 5.31511C16.9993 -0.381668 6.40532 5.11522 7.70459 13.2106C8.00442 15.2095 10.1032 15.8092 8.50413 18.5076C4.90617 17.7081 3.90674 14.9097 4.00668 11.1118C4.20657 5.01528 9.50357 0.717709 14.8006 0.118048C21.4968 -0.681499 27.7932 2.61663 28.6927 8.91307C29.6921 16.0091 25.6944 23.8046 18.4985 23.205C16.5996 23.105 15.8 22.1056 14.2009 21.2061Z" />
  </svg>
);

Pinterest.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Pinterest.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Pinterest };
