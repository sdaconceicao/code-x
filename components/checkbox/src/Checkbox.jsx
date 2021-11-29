import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withFormContext } from '@code-x/form-context';
import useStyles from './Checkbox.styles';

export const Checkbox = ({
  id, name, value, className, label, errors,
  onChange, onKeyDown,
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
  return (
    <label htmlFor={id} className={classes.label}>
      <input
        id={id}
        type="checkbox"
        name={name}
        className={`${classes.checkbox} ${className} ${errors ? 'error' : ''}`}
        onChange={handleChange}
        value={value}
        onKeyDown={onKeyDown}
        {...rest}
        checked={checked}
      />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.instanceOf(Array),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
};

Checkbox.defaultProps = {
  className: '',
  label: '',
  value: undefined,
  checked: false,
  errors: [],
  onChange: () => {},
  onKeyDown: () => {}
};

const FormElementCheckbox = withFormContext(Checkbox);
FormElementCheckbox.displayName = 'Checkbox';

export default FormElementCheckbox;
