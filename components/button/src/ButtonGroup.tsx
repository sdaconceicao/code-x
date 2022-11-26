import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './ButtonGroup.styles';
import { Display } from './Button.d';
import { ButtonGroup as ButtonGroupProps } from './ButtonGroup.d';

export const ButtonGroup = ({ children, className = '', display = Display.block }) => {
  const classes = useStyles({ display });
  return <div className={`${classes.buttonGroup} ${className}`}>{children}</div>;
};

export default ButtonGroup;
