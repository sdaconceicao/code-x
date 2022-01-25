import EXIF from 'exif-js';
import { useEffect, useState } from 'react';
import useImageLoad from './useImageLoad';
/**
 * Pulls exif data from jpegs
 * @param image
 * @returns {Promise}
 */
export default (src) => {
  const [imageMeta, setImageMeta] = useState();
  const { image, loaded, ...imageProps } = useImageLoad(src);
  const getImageMeta = (loadedImage) => {
    return new Promise((resolve) => {
      EXIF.getData(loadedImage, function () {
        // Fat arrow does not work here
        const exif = EXIF.getAllTags(this);
        resolve({
          ...exif,
          ...imageProps
        });
      });
    });
  };

  useEffect(() => {
    if (loaded) {
      getImageMeta(image).then((data) => {
        setImageMeta(data);
      });
    }
  }, [loaded, image]);

  return imageMeta;
};
