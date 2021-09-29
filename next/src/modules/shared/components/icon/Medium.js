import React from 'react';
import PropTypes from 'prop-types';

const Medium = ({ className, height = '32', width = '32' }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 6.73338H30.7344C30.2645 6.73338 29.6 7.41125 29.6 7.84513V23.5734C29.6 24.0078 30.2645 24.6 30.7344 24.6H32V28.3334H20.5334V24.6H22.9334V8.06663H22.8158L17.2113 28.3334H12.8722L7.34 8.06663H7.2V24.6H9.6V28.3334H0V24.6H1.22938C1.7355 24.6 2.4 24.0078 2.4 23.5734V7.845C2.4 7.41112 1.7355 6.73325 1.22938 6.73325H0V3H12.0042L15.9455 17.6666H16.0543L20.0316 3H32V6.73338Z" />
  </svg>
);

Medium.PropTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Medium.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Medium };
