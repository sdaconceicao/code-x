import React, { useContext } from 'react';
import FormContext from './Form.context';

/**
 * Takes a bare form component and connects it to the form context
 * @param Component
 * @returns Component with form context
 */
export default (Component) => {
  const componentRef = React.createRef();
  return (props) => {
    const { onChange} = useContext(FormContext);
    const errors = componentRef.current
      ? componentRef.current.state.errors
      : null;

    return (
      <Component errors={errors}
                 {...props}
                 onChange={onChange}
      />
    )
  }
};
