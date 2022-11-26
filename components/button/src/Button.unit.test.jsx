import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.template.js';

const { Button } = composeStories(stories);

describe('Button', () => {
  it('renders a button with given text', () => {
    const { getByRole } = render(<Button>Lorem</Button>);
    expect(getByRole('button', { name: 'Lorem' })).toBeTruthy();
  });
  it('returns an onClick event', () => {
    const spy = jest.fn();
    const { getByRole } = render(<Button onClick={spy}>Lorem</Button>);
    fireEvent.click(getByRole('button', { name: 'Lorem' }));
    expect(spy).toBeCalledTimes(1);
  });
});
