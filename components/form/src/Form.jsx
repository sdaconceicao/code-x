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
    const formErrors = [];
    elements.map((element) => {
      const { doValidate } = element.props.innerRef.current;
      const { valid, value, errors } = doValidate();
      if (valid && value) {
        result[element.props.name] = {
          name: element.props.name,
          value: result[element.props.name]?.value
            ? [...result[element.props.name].value, value]
            : value
        };
      } else if (errors) {
        formErrors.push(errors);
      }
    });
    if (formErrors.length === 0) setDirty(false);
    onSubmit({
      errors: formErrors,
      result,
      dirty
    });
  };

  const onChange = () => {
    setDirty(true);
  };

  const addFormElement = (element) => {
    updateElements({ type: actions.ADD, value: element });
  };

  const removeFormElement = (element) => {
    updateElements({ type: actions.REMOVE, value: element });
  };

  return (
    <FormContext.Provider
      value={{
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
  /** Array of Form Elements connected to Form Context */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  /** Classname to override default form styling */
  className: PropTypes.string,
  /** Callback for onSubmit event */
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  className: ''
};

export default Form;
