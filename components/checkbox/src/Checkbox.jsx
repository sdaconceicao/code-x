import React, { useState, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withFormElement } from '@code-x/form-element';
import useStyles from './Checkbox.styles';

export const CheckboxComponent = ({
  id,
  name,
  value,
  className,
  label,
  errors,
  innerRef,
  onChange,
  onKeyDown,
  ...rest
}) => {
  const [checked, setChecked] = useState(rest.checked);
  const classes = useStyles();
  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange({
      name,
      checked: e.target.checked,
      value: e.target.value,
      dirty: true
    });
  };

  useImperativeHandle(innerRef, () => ({
    doValidate: () => ({
      value: checked ? value : undefined,
      valid: true
    })
  }));

  useEffect(() => {
    setChecked(rest.checked);
  }, [rest.checked]);

  return (
    <label htmlFor={id} className={classes.label} ref={innerRef}>
      <input
        id={id}
        type="checkbox"
        name={name}
        className={`${classes.checkbox} ${className} ${errors ? 'error' : ''}`}
        onChange={handleChange}
        value={value}
        onKeyDown={onKeyDown}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        checked={checked}
      />
      {label}
    </label>
  );
};

CheckboxComponent.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) })
  ]),
  label: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.instanceOf(Array),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
};

CheckboxComponent.defaultProps = {
  className: '',
  innerRef: undefined,
  label: '',
  value: undefined,
  checked: false,
  errors: [],
  onChange: () => {},
  onKeyDown: () => {}
};

const CheckboxFormElement = (props) =>
  withFormElement(CheckboxComponent)({ hideLabel: true, ...props });
CheckboxFormElement.displayName = 'Checkbox';

export default CheckboxFormElement;
