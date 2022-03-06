import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '@code-x/label';
import { useFormContext } from '@code-x/form-context';
import useStyles from './FormElementWrapper.styles';

const FormElementWrapper = ({
  className,
  label,
  required,
  optional,
  id,
  inline,
  flex,
  children
}) => {
  const classes = useStyles({ inline, flex });
  const { children: childrenWithContext, errors } = useFormContext(children);

  return (
    <div className={`${classes.formComponent} ${className}`}>
      {label && (
        <Label required={required} optional={optional} htmlFor={id}>
          {label}
        </Label>
      )}
      <div className={classes.childWrapper}>{childrenWithContext}</div>
      {errors && <div className={classes.error}>{errors.map((error) => error)}</div>}
    </div>
  );
};

FormElementWrapper.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  flex: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  children: PropTypes.node.isRequired
};

FormElementWrapper.defaultProps = {
  className: '',
  id: undefined,
  inline: false,
  flex: false,
  label: undefined,
  required: false,
  optional: false
};

export default FormElementWrapper;
