import React from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '@code-x/form-context';

export const Form = ({ children, className, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const onChange = (name, value) => {
    // TODO
    console.log('name:value', name, value);
  };

  return (
    <FormContext.Provider value={{
      onChange
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
