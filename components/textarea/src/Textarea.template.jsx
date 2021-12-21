import React from 'react';
import { Textarea as TextareaComponent } from './index';

export default {
  component: TextareaComponent
};

export const Textarea = (args) => (
  <TextareaComponent {...args} />
);
