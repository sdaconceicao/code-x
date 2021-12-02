import React, { useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { withFormContext } from '@code-x/form-context';
import { withFormElement } from '@code-x/form-element';
import useStyles from './Input.styles';

export const InputComponent = ({
  id, name, value, className, errors, withButton,
  onKeyDown, onChange, onBlur, onEnter, innerRef, required,
  ...rest
}) => {
  const [localValue, setLocalValue] = useState(value);
  const classes = useStyles({ withButton, errors });
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

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useImperativeHandle(innerRef, () => ({
    doValidate: () => {
      const localErrors = [];
      if (required && (localValue === undefined || localValue === '')) {
        localErrors.push(`${name} Required`); // TODO localize
      }
      return {
        errors: localErrors.length === 0 ? undefined : localErrors,
        value: localValue,
        valid: localErrors.length === 0
      };
    }
  }));

  return (
    <input
      id={id}
      name={name}
      ref={innerRef}
      className={`${classes.input} ${className}`}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={onBlur}
      value={localValue}
      {...rest}
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
  errors: [],
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
export const InputWithContext = withFormContext(InputComponent);
const InputFormElement = withFormElement(InputWithContext);
InputFormElement.displayName = 'Input';

export default InputFormElement;
