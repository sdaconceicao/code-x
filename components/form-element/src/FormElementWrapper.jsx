import React, { Children, useRef, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Label } from '@code-x/label';
import { useFormContext } from '@code-x/form-context';
import useStyles from './FormElementWrapper.styles';

const FormElementWrapper = ({
  label, required, optional, id, inline,
  error, children
}) => {
  const ref = useRef();
  const refWithChildren = Children.map(children, (child) => (
    child.props.name
      ? cloneElement(child, { innerRef: ref })
      : child
  ));
  const classes = useStyles({ inline });
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
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node.isRequired
};

FormElementWrapper.defaultProps = {
  id: undefined,
  inline: false,
  label: undefined,
  required: false,
  optional: false,
  error: undefined
};

export default FormElementWrapper;
