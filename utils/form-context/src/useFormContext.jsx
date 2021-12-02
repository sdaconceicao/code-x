import { useEffect, useContext } from 'react';
import FormContext from './Form.context';

export default (children) => {
  const { addFormElement, removeFormElement } = useContext(FormContext);
  useEffect(() => {
    addFormElement?.(children);
    return () => {
      removeFormElement?.(children);
    };
  }, []);
};
