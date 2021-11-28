import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { Label } from '@code-x/label';
import useStyles from './FormElementWrapper.styles';

const FormElementWrapper = ({
  label, required, optional, id,
  error, children
}) => {
  const theme = useTheme();
  const classes = useStyles({ ...theme });
  return (
    <span className={classes.formComponent}>
      {label && <Label required={required} optional={optional} htmlFor={id}>{label}</Label>}
      {children}
      {error && <div>{error}</div>}
    </span>
  );
};

FormElementWrapper.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node.isRequired
};

FormElementWrapper.defaultProps = {
  label: undefined,
  required: false,
  optional: false,
  error: undefined
};

export default FormElementWrapper;
