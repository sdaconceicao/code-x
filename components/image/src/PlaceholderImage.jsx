import React from 'react';
import PropTypes from 'prop-types';

import * as placeholder from './placeholder.png';

export const PlaceholderImage = ({ className, alt, src }) => (
  <img className={`placeholder ${className}`} src={src} alt={alt} />
);

PlaceholderImage.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

PlaceholderImage.defaultProps = {
  className: '',
  src: placeholder
};

export default PlaceholderImage;
