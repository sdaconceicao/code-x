import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Button.styles';
import { kinds, sizes, displays } from './vars';

export const Button = ({
  children, disabled, className, onClick, type, kind, size, withInput, display, ...rest
}) => {
  const classes = useStyles({ withInput, display });
  return (
    <button className={`${classes.button} ${classes[kind]} ${classes[size]} ${className}`} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /** HTML id of element */
  id: PropTypes.string,
  /** Classname to override default element styling */
  className: PropTypes.string,
  /** State of button */
  disabled: PropTypes.bool,
  /** Display type */
  display: PropTypes.oneOf(Object.keys(displays)),
  /** HTML button type */
  type: PropTypes.oneOf(['submit', 'button']),
  /** Size of button */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /** Visual kind of button */
  kind: PropTypes.oneOf(Object.keys(kinds)),
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
  kind: kinds.primary,
  size: sizes.md,
  withInput: false,
  display: displays.block,
  className: '',
  onClick: undefined
};

export default Button;
