import React, { useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { withFormElement } from '@code-x/form-element';
import { required as requiredValidator, doValidate } from '@code-x/validators';
import useStyles from './Textarea.styles';

export const resizes = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  both: 'both',
  none: 'none'
};

export const TextareaComponent = ({
  id,
  name,
  label,
  value,
  className,
  errors,
  resize,
  onKeyDown,
  onChange,
  onBlur,
  onEnter,
  innerRef,
  required,
  ...rest
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [localErrors, setLocalErrors] = useState(errors);
  const classes = useStyles({ errors: localErrors, resize });
  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onChange({
      name,
      value: e.target.value,
      dirty: true
    });
  };

  const validate = () => {
    const response = doValidate(
      {
        name: label || name,
        value: localValue,
        required
      },
      required ? [requiredValidator] : undefined
    );
    setLocalErrors(response.errors);
    return {
      ...response,
      value: localValue
    };
  };

  const handleKeyDown = (e) => {
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
    doValidate: validate
  }));

  return (
    <textarea
      id={id}
      name={name}
      ref={innerRef}
      className={`${classes.textarea} ${className}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      value={localValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  );
};

TextareaComponent.propTypes = {
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
  /** Max number of characters allowed in textarea */
  maxLength: PropTypes.number,
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
  /** Allow vertical/horizontal resize */
  resize: PropTypes.oneOf(Object.keys(resizes)),
  /** HTML value of element */
  value: PropTypes.string
};

TextareaComponent.defaultProps = {
  className: '',
  errors: undefined,
  id: undefined,
  innerRef: undefined,
  label: '',
  maxLength: undefined,
  onBlur: () => {},
  onChange: () => {},
  onEnter: () => {},
  onKeyDown: () => {},
  required: false,
  resize: resizes.vertical,
  value: undefined
};

const TextareaFormElement = withFormElement(TextareaComponent);
TextareaFormElement.displayName = 'Textarea';

export default TextareaFormElement;
