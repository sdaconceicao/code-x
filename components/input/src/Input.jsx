import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { withFormContext } from '@code-x/form-context';
import { withFormElement } from '@code-x/form-element';
import useStyles from './Input.styles';

export const Input = ({
  id, name, value, className, errors,
  onKeyDown, onChange, onBlur, onEnter,
  ...rest
}) => {
  const [localValue, setLocalValue] = useState(value);
  const theme = useTheme();
  const classes = useStyles({ ...rest, ...theme });
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
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.instanceOf(Array),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onKeyDown: PropTypes.func
};

Input.defaultProps = {
  className: '',
  label: '',
  value: undefined,
  errors: [],
  onBlur: () => {},
  onChange: () => {},
  onEnter: () => {},
  onKeyDown: () => {}
};

export default withFormElement(withFormContext(Input));
