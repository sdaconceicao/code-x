import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders', () => {
    const { getByText } = render(<Button>Lorem</Button>);
    expect(getByText('Lorem')).toBeTruthy();
  });
})
