import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Button.styles';

export const styles = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
}

export const Button = ({
  children, disabled, className, onClick, type, style, ...rest
}) => {
  const classes = useStyles();
  return (
    <button className={`${classes.button} ${classes[style]} ${className}`} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  )
};

Button.propTypes = {
  /** HTML id of element */
  id: PropTypes.string,
  /** Classname to override default element styling */
  className: PropTypes.string,
  /** State of button */
  disabled: PropTypes.bool,
  /** HTML button type */
  type: PropTypes.oneOf(['submit', 'button']),
  /** Visual style of button */
  style: PropTypes.oneOf(Object.keys(styles)),
  /** Contents of button */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Callback for button click */
  onClick: PropTypes.func
};

Button.defaultProps = {
  id: '',
  disabled: false,
  type: 'button',
  style: styles.primary,
  className: '',
  onClick: undefined
};

export default Button;
