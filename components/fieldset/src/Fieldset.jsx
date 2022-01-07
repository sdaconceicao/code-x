import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Fieldset.styles';

const Fieldset = ({ className, errors, label, children, required }) => {
  const classes = useStyles({ errors });
  return (
    <fieldset className={`${classes.fieldset} ${className}`}>
      {label && (
        <legend className={classes.legend}>
          {label}
          {required && <span className={classes.required}>*</span>}
        </legend>
      )}
      <span className={classes.content}>{children}</span>
    </fieldset>
  );
};

Fieldset.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  errors: PropTypes.instanceOf(Array),
  label: PropTypes.string,
  required: PropTypes.bool
};

Fieldset.defaultProps = {
  className: '',
  errors: undefined,
  label: undefined,
  required: false
};

export default Fieldset;
