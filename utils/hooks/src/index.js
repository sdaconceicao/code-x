import { useRef, useEffect } from 'react';

export const useDidMount = (callback) => {
  useEffect(() => callback(), []);
};
