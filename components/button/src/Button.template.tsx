import React from 'react';
import { Button as ButtonComponent } from './index';

export default {
  component: ButtonComponent
};

export const Button = (args) => <ButtonComponent {...args} />;
