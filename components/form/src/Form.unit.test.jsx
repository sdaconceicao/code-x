import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Form.template';

const { FullExample } = composeStories(stories);

describe('Form', () => {
  it('Returns an error if failing form validation', () => {
    const { getByRole, getByText } = render(<FullExample />);
    const submit = getByRole('button', { name: 'Submit' });
    fireEvent.click(submit);
    expect(getByText('Errors')).toBeTruthy();
  });

  it('Returns a value if form submission passes', () => {
    const { getByRole, getByText } = render(<FullExample />);
    fireEvent.click(getByRole('radio', { name: 'Lorem Radio' }));
    fireEvent.click(getByRole('checkbox', { name: 'Ipsum Checkum' }));
    fireEvent.click(getByRole('button', { name: 'Submit' }));
    expect(getByText('input - Lorem Exampum')).toBeTruthy();
    expect(getByText('inputWithButton - lorem')).toBeTruthy();
    expect(getByText('textarea - Lorem Ipsum')).toBeTruthy();
    expect(getByText('richTextEditor - <p>Lorem Ipsum</p>')).toBeTruthy();
    expect(getByText('singleSelect - ipsum')).toBeTruthy();
    expect(getByText('checkboxEx - Ipsum Checkum')).toBeTruthy();
    expect(getByText('radioEx - Lorem Radio')).toBeTruthy();
  });
});
