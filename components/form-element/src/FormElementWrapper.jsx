import React, { Children, useRef, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Label } from '@code-x/label';
import { useFormContext } from '@code-x/form-context';
import useStyles from './FormElementWrapper.styles';

const FormElementWrapper = ({
  label, required, optional, id,
  error, children
}) => {
  const ref = useRef();
  const refWithChildren = Children.map(children, (child) => cloneElement(child, {
    innerRef: ref
  }))
  const classes = useStyles();
  useFormContext(refWithChildren);
  return (
    <div className={classes.formComponent}>
      {label && <Label required={required} optional={optional} htmlFor={id}>{label}</Label>}
      {refWithChildren}
      {error && <div>{error}</div>}
    </div>
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
