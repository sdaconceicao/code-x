import React from 'react';

export interface Button {
  /** Is Button active */
  active: boolean;
  /** HTML id of element */
  id: string;
  /** Classname to override default element styling */
  className: string;
  /** State of button */
  disabled: boolean;
  /** Display type */
  display: Display;
  /** HTML button type */
  type: Type;
  /** Size of button */
  size: Size;
  /** Visual kind of button */
  kind: Kind;
  /** Button attached to an input */
  withInput: boolean;
  /** Contents of button */
  children: string | React.ReactNode;
  /** Callback for button click */
  onClick: () => {};
}

export enum Type {
  submit = 'submit',
  button = 'button'
}

export enum Kind {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary'
}

export enum Size {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export enum Display {
  block = 'block',
  inline = 'inline',
  inlineBlock = 'inline-block'
}
