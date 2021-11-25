import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Input.template.jsx';

const { Input } = composeStories(stories);

describe('Input', () => {
  it('renders a textbox with a given value', () => {
    const { getByRole } = render(<Input name="Lorem" value="Ipsum" />);
    expect(getByRole('textbox', { value: 'Lorem' })).toBeTruthy();
  });
});
