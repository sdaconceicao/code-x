import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Fieldset.styles';

const Fieldset = ({ label, children }) => {
  const classes = useStyles();
  return (
    <fieldset className={classes.fieldset}>
      {label && <legend>{label}</legend>}
      <span className={classes.content}>{children}</span>
    </fieldset>
  );
};

Fieldset.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  label: PropTypes.string
};

Fieldset.defaultProps = {
  label: undefined
};

export default Fieldset;
