import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Textarea.template.jsx';

const { Textarea } = composeStories(stories);

describe('Textarea', () => {
  it('renders a textbox with a given value', () => {
    const { getByRole } = render(<Textarea name="Lorem" value="Ipsum" />);
    expect(getByRole('textbox', { value: 'Lorem' })).toBeTruthy();
  });
  it('returns onChange whenever value is changed', () => {
    const spy = jest.fn();
    const { getByRole } = render(<Textarea name="input1" value="Lorem" onChange={spy} />);
    fireEvent.change(getByRole('textbox', { value: 'Lorem' }), { target: { value: 'ipsum' } });
    expect(getByRole('textbox', { value: 'ipsum' })).toBeTruthy();
    expect(spy).toHaveBeenCalledWith({ name: 'input1', value: 'ipsum', dirty: true });
  });
});
