import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withFormContext } from '@code-x/form-context';
import { withFormElement } from '@code-x/form-element';
import useStyles from './Input.styles';

export const Input = ({
  id, name, value, className, errors, withButton,
  onKeyDown, onChange, onBlur, onEnter,
  getValue, doValidate, //Form Context provided props to not include in dom
  ...rest
}) => {
  const [localValue, setLocalValue] = useState(value);
  const classes = useStyles({ withButton });
  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onChange({
      name,
      value: e.target.value,
      dirty: true
    });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && onEnter) {
      e.preventDefault();
      onEnter();
    }
    onKeyDown(e);
  };

  return (
    <input
      id={id}
      name={name}
      className={`${classes.input} ${className} ${errors ? 'error' : ''}`}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={onBlur}
      value={localValue}
      {...rest}
    />
  );
};

Input.propTypes = {
  /** HTML id of element */
  id: PropTypes.string,
  /** Classname to override default element styling */
  className: PropTypes.string,
  /** HTML name of element */
  name: PropTypes.string.isRequired,
  /** Label for element */
  label: PropTypes.string,
  /** HTML value of element */
  value: PropTypes.string,
  /** Errors array from form validation */
  errors: PropTypes.instanceOf(Array),
  /** Callback for blur event */
  onBlur: PropTypes.func,
  /** Callback for change event */
  onChange: PropTypes.func,
  /** Callback for enter event */
  onEnter: PropTypes.func,
  /** Callback for keydown event */
  onKeyDown: PropTypes.func,
  /** Display input with a sibling attached button */
  withButton: PropTypes.bool
};

Input.defaultProps = {
  id: undefined,
  className: '',
  label: '',
  value: undefined,
  errors: [],
  onBlur: () => {},
  onChange: () => {},
  onEnter: () => {},
  onKeyDown: () => {},
  withButton: false
};

const InputFormElement = withFormElement(withFormContext(Input));
InputFormElement.displayName = 'Input';

export default InputFormElement;
