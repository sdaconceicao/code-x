import React from 'react';
import { action } from '@storybook/addon-actions';
import { Input } from '.';

export default {
  title: 'Components',
};

export const toStorybook = () => (
  <Input name="example" 
    id="example"
    label="Label" 
    type="text"
    value="Lorem ipsum"
    onChange={action('value changed')}
    />
);

toStorybook.story = {
  name: 'Input',
};
