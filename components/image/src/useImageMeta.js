import EXIF from 'exif-js';
import { useCallback, useEffect, useState } from 'react';
import useImageLoad from './useImageLoad';
/**
 * Pulls exif data from jpegs
 * @param image
 * @returns {Promise}
 */
export default (src) => {
  const [imageMeta, setImageMeta] = useState();
  const { image, loaded } = useImageLoad(src);
  const getImageMeta = useCallback((loadedImage) => {
    return new Promise((resolve) => {
      // eslint-disable-next-line func-names
      EXIF.getData(loadedImage, function () {
        // Fat arrow does not work here, needs to be function
        const exif = EXIF.getAllTags(this);
        resolve({
          ...exif
        });
      });
    });
  }, []);
  useEffect(() => {
    if (loaded) {
      getImageMeta(image).then((data) => {
        setImageMeta(data);
      });
    }
  }, [loaded, image, getImageMeta]);

  return imageMeta;
};
