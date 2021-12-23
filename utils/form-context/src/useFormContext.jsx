import {
  Children, useContext, useEffect, useRef, cloneElement
} from 'react';
import FormContext from './Form.context';

export default (children, onBlur) => {
  const ref = useRef();
  const { addFormElement, removeFormElement, onChange: handleChange } = useContext(FormContext);
  const refWithChildren = Children.map(children, (child) => (
    child.props.name && child.props.addFormElement !== false
      ? cloneElement(child, {
        onBlur,
        onChange: (e) => {
          child.props.onChange?.(e);
          handleChange?.(e);
        },
        innerRef: ref
      })
      : child
  ));
  useEffect(() => {
    addFormElement?.(refWithChildren);
    return () => {
      removeFormElement?.(refWithChildren);
    };
  }, []);

  return refWithChildren;
};
