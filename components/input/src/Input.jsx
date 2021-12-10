import React, { useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { withFormElement } from '@code-x/form-element';
import useStyles from './Input.styles';

export const InputComponent = ({
  id, name, label, value, className, errors, withButton,
  onKeyDown, onChange, onBlur, onEnter, innerRef, required,
  ...rest
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [localErrors, setLocalErrors] = useState(errors);
  const classes = useStyles({ withButton, errors: localErrors });
  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onChange({
      name,
      value: e.target.value,
      dirty: true
    });
  };

  const validate = () => {
    let validationErrors;
    if (required && (localValue === undefined || localValue === '')) {
      validationErrors = [(`${label} Required`)]; // TODO localize
    }
    setLocalErrors(validationErrors);
    return {
      errors: validationErrors,
      value: localValue,
      valid: !validationErrors
    };
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && onEnter) {
      e.preventDefault();
      onEnter();
    }
    onKeyDown(e);
  };

  const handleBlur = (e) => {
    const results = validate();
    onBlur?.({ ...e, ...results });
  };

  useEffect(() => {
    setLocalErrors(errors);
  }, [errors]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useImperativeHandle(innerRef, () => ({
    doValidate: validate,
    setErrors: (e) => setLocalErrors(e)
  }));

  return (
    <input
      id={id}
      name={name}
      ref={innerRef}
      className={`${classes.input} ${className}`}
      {...rest}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      value={localValue}
    />
  );
};

InputComponent.propTypes = {
  /** Classname to override default element styling */
  className: PropTypes.string,
  /** Errors array from form validation */
  errors: PropTypes.instanceOf(Array),
  /** HTML id of element */
  id: PropTypes.string,
  /** Ref for input */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) })
  ]),
  /** Label for element */
  label: PropTypes.string,
  /** HTML name of element */
  name: PropTypes.string.isRequired,
  /** Callback for blur event */
  onBlur: PropTypes.func,
  /** Callback for change event */
  onChange: PropTypes.func,
  /** Callback for enter event */
  onEnter: PropTypes.func,
  /** Callback for keydown event */
  onKeyDown: PropTypes.func,
  /** Is Input required */
  required: PropTypes.bool,
  /** HTML value of element */
  value: PropTypes.string,
  /** Display input with a sibling attached button */
  withButton: PropTypes.bool

};

InputComponent.defaultProps = {
  className: '',
  errors: undefined,
  id: undefined,
  innerRef: undefined,
  label: '',
  onBlur: () => {},
  onChange: () => {},
  onEnter: () => {},
  onKeyDown: () => {},
  required: false,
  value: undefined,
  withButton: false
};

const InputFormElement = withFormElement(InputComponent);
InputFormElement.displayName = 'Input';

export default InputFormElement;
