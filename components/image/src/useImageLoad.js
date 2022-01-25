import { useEffect, useReducer, useRef } from 'react';

export default (src) => {
  const loadedImage = useRef();
  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateDimensions':
        return action.value;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    loaded: false
  });

  const loadImage = (srcUrl) => {
    loadedImage.current = new Image();
    loadedImage.current.src = srcUrl;
    loadedImage.current.onload = () => {
      if (loadedImage.current) {
        // avoids memory leak on hook cleanup
        dispatch({
          type: 'updateDimensions',
          value: {
            loaded: true,
            image: loadedImage.current,
            width: loadedImage.current.naturalWidth,
            height: loadedImage.current.naturalHeight,
            orientation:
              loadedImage.current.naturalWidth > loadedImage.naturalHeight
                ? 'landscape'
                : 'portrait'
          }
        });
      }
    };
  };

  useEffect(() => {
    loadImage(src);
  }, [src]);

  useEffect(() => {
    return () => {
      loadedImage.current = null;
    };
  }, []);

  return state;
};
