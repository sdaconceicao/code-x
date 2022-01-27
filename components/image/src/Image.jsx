import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useImageLoad from './useImageLoad';
import { PlaceholderImage } from './PlaceholderImage';

const Image = ({ alt, className, onLoad, placeholder, src }) => {
  const loadedImage = useRef();
  const { loading, orientation } = useImageLoad(src);

  const handleLoad = () => {
    onLoad?.(loadedImage.current);
  };

  return (
    <>
      {(loading || !src) &&
        (placeholder || <PlaceholderImage alt={alt} src={placeholder} className={className} />)}
      {src && !loading && (
        <img
          className={`${className} ${orientation}`}
          onLoad={handleLoad}
          ref={loadedImage}
          src={src}
          alt={alt}
        />
      )}
    </>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

Image.defaultProps = {
  className: '',
  onLoad: () => {},
  placeholder: undefined
};

export default Image;
