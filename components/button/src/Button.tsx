import * as React from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './Button.styles';
import { Button as ButtonProps, Type, Kind, Size, Display } from './Button.d';

export const Button = ({
  id = '',
  active = false,
  children,
  disabled = false,
  className,
  onClick,
  display = Display.block,
  type = Type.button,
  kind = Kind.primary,
  size = Size.md,
  withInput = false,
  ...rest
}: ButtonProps) => {
  const classes = useStyles({ withInput, display });
  return (
    <button
      className={`
      ${classes.button} 
      ${classes[kind]} 
      ${classes[size]} 
      ${active ? classes.active : ''}
      ${className}`}
      type={type}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
