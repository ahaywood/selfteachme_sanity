import React from 'react';
import PropTypes from 'prop-types';

const Vimeo = ({ className, height = '32', width = '32' }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 9.72891L1.3 11.4289C1.3 11.4289 4 9.32891 4.9 10.3289C5.8 11.4289 9.2 24.1289 10.3 26.5289C11.3 28.6289 14 31.3289 17 29.3289C20 27.4289 30 18.8289 31.8 8.72891C33.6 -1.37109 19.8 0.728911 18.3 9.52891C22 7.32891 23.9 10.4289 22 13.9289C20.1 17.4289 18.4 19.7289 17.5 19.7289C16.6 19.7289 15.9 17.4289 14.9 13.3289C14 9.12891 14 1.52891 9.6 2.42891C5.4 3.22891 0 9.72891 0 9.72891Z" />
  </svg>
);

Vimeo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Vimeo.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Vimeo };
