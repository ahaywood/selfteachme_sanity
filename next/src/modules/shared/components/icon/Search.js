import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ className, height = '32', width = '32' }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.37037 13.037C2.37037 7.146 7.146 2.37037 13.037 2.37037C18.9281 2.37037 23.7037 7.146 23.7037 13.037C23.7037 18.9281 18.9281 23.7037 13.037 23.7037C7.146 23.7037 2.37037 18.9281 2.37037 13.037ZM13.037 0C5.83688 0 0 5.83688 0 13.037C0 20.2372 5.83688 26.0741 13.037 26.0741C16.2104 26.0741 19.1189 24.9403 21.3796 23.0557L29.9768 31.6529C30.4396 32.1157 31.19 32.1157 31.6529 31.6529C32.1157 31.19 32.1157 30.4396 31.6529 29.9768L23.0557 21.3796C24.9403 19.1189 26.0741 16.2104 26.0741 13.037C26.0741 5.83688 20.2372 0 13.037 0Z"
    />
  </svg>
);

Search.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Search.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Search };
