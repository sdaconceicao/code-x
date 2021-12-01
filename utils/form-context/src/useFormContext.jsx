import React, { useEffect, useContext } from 'react';
import FormContext from './Form.context';

export default (children) => {
  const { addFormElement, removeFormElement } = useContext(FormContext);
  useEffect(()=>{
    addFormElement && addFormElement(children);
    return () => {
      removeFormElement(children)
    }
  }, []);
};
