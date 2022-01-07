import React from 'react';
import PropTypes from 'prop-types';
import { useIcons } from '@code-x/theme';
import useStyles from './Alert.styles';

export const types = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
};

export const Alert = ({ children, className, type, icon, ...rest }) => {
  const classes = useStyles();
  const icons = useIcons();
  const iconDisplay = icon && Object.keys(types).includes(type) ? icons[type]?.() : null;
  return (
    <div className={`${classes.alert} ${classes[type]} ${className} `} {...rest}>
      {iconDisplay && <div className={classes.icon}>{iconDisplay}</div>}
      <div className={classes.content}>{children}</div>
    </div>
  );
};

Alert.propTypes = {
  /** Contents of alert */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Classname to override default element styling */
  className: PropTypes.string,
  /** Display icon in alert */
  icon: PropTypes.bool,
  /** Type of alert */
  type: PropTypes.oneOf(Object.keys(types))
};

Alert.defaultProps = {
  icon: true,
  type: undefined,
  className: ''
};

export default Alert;
