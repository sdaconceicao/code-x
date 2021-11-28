import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Button.styles';

export const styles = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
};

export const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export const Button = ({
  children, disabled, className, onClick, type, style, size, withInput, ...rest
}) => {
  const classes = useStyles({withInput});
  return (
    <button className={`${classes.button} ${classes[style]} ${classes[size]} ${className}`} type={type} onClick={onClick} {...rest}>
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
  /** Size of button */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /** Visual style of button */
  style: PropTypes.oneOf(Object.keys(styles)),
  /** Button attached to an input */
  withInput: PropTypes.bool,
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
  size: sizes.md,
  withInput: false,
  className: '',
  onClick: undefined
};

export default Button;
