import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './ButtonGroup.styles';
import { displays } from './vars';

export const ButtonGroup = ({ children, className, display }) => {
  const classes = useStyles({ display });
  return <div className={`${classes.buttonGroup} ${className}`}>{children}</div>;
};

ButtonGroup.propTypes = {
  /** Classname to override default element styling */
  className: PropTypes.string,
  /** Contents of button */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Display type */
  display: PropTypes.oneOf(Object.keys(displays))
};

ButtonGroup.defaultProps = {
  className: '',
  display: displays.block
};

export default ButtonGroup;
