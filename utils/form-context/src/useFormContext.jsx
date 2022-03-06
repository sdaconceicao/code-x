import { Children, useContext, useEffect, useRef, cloneElement, useState } from 'react';
import FormContext from './Form.context';

export default (children) => {
  const ref = useRef();
  const { addFormElement, removeFormElement, onChange: handleChange } = useContext(FormContext);
  const [errors, setErrors] = useState();
  const handleBlur = (e) => setErrors(e.errors);

  const refWithChildren = Children.map(children, (child) =>
    child.props.name && child.props.addFormElement !== false
      ? cloneElement(child, {
          onBlur: (e) => {
            child.props.onBlur?.(e);
            handleBlur(e);
          },
          onChange: (e) => {
            child.props.onChange?.(e);
            handleChange?.(e);
          },
          innerRef: ref,
          errors
        })
      : child
  );
  // Add and remove elements on mount/unmount
  useEffect(() => {
    addFormElement?.(refWithChildren);
    return () => {
      removeFormElement?.(refWithChildren);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { children: refWithChildren, errors };
};
