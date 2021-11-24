import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders', () => {
    const { getByRole } = render(<Button>Lorem</Button>);
    expect(getByRole('button', { name: 'Lorem' })).toBeTruthy();
  });
  it('returns an onClick event', () =>{
    const spy = jest.fn();
    const { getByRole } = render(<Button onClick={spy}>Lorem</Button>);
    fireEvent.click(getByRole('button', { name: 'Lorem' }))
    expect(spy).toBeCalledTimes(1);
  })
});
