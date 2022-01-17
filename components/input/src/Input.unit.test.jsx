import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Input.template.jsx';

const { Input } = composeStories(stories);

describe('Input', () => {
  it('renders a textbox with a given value', () => {
    const { getByRole } = render(<Input name="Lorem" value="Ipsum" />);
    expect(getByRole('textbox', { value: 'Lorem' })).toBeTruthy();
  });
  it('returns onChange whenever value is changed', () => {
    const spy = jest.fn();
    const { getByRole } = render(<Input name="input1" value="Lorem" onChange={spy} />);
    fireEvent.change(getByRole('textbox', { value: 'Lorem' }), { target: { value: 'ipsum' } });
    expect(getByRole('textbox', { value: 'ipsum' })).toBeTruthy();
    expect(spy).toHaveBeenCalledWith({ name: 'input1', value: 'ipsum', dirty: true });
  });
});
