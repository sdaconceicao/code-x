import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '@code-x/form-context';
import reducer, { actions } from './Form.reducer';

export const Form = ({ children, className, onSubmit }) => {
  const [dirty, setDirty] = useState(false);
  const [elements, updateElements] = useReducer(reducer, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = [];
    elements.foreach(element => {
      if (element.props.innerRef.current.getValue()) {
        result[element.props.name] = {
          name: element.props.name,
          value: result[element.props.name]?.value
            ? [...result[element.props.name].value, element.props.innerRef.current.getValue()]
            : element.props.innerRef.current.getValue()
        };
      }
    });
    onSubmit(result);
    setDirty(false);
  };

  const onChange = ({ name, value, checked }) => {
    console.log('name:value', name, value, checked, dirty);
    setDirty(true);
  };

  const addFormElement = (element) => {
    updateElements({ type: actions.ADD, value: element });
  };

  const removeFormElement = (element) => {
    updateElements({ type: actions.REMOVE, value: element });
  };

  return (
    <FormContext.Provider value={{
      onChange,
      addFormElement,
      removeFormElement
    }}
    >
      <form onSubmit={handleSubmit} className={`${className}`}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  className: ''
};

export default Form;
