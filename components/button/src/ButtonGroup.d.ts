import React from 'react';
import { Display } from './Button.d';

export interface ButtonGroup {
  /** Classname to override default element styling */
  className: string;
  /** Contents of button */
  children: string | React.ReactNode;
  /** Display type */
  display: Display;
}
