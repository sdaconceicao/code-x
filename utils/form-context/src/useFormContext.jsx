import {
  Children, useContext, useEffect, useRef, cloneElement
} from 'react';
import FormContext from './Form.context';

export default (children, onBlur) => {
  const ref = useRef();
  const { addFormElement, removeFormElement, onChange } = useContext(FormContext);
  const refWithChildren = Children.map(children, (child) => (
    child.props.name
      ? cloneElement(child, { onBlur, onChange, innerRef: ref })
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
