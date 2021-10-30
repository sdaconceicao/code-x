import React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.template.jsx';

const { Button } = composeStories(stories);

describe('Button', () => {
  describe('A11y', () => {
    beforeEach(() => {
      cy.injectAxe();
      // The following rules are not relevant to component testing so they're disabled
      cy.configureAxe({
        rules: [{
          id: 'html-has-lang',
          enabled: false
        },
        {
          id: 'landmark-one-main',
          enabled: false
        },
        {
          id: 'page-has-heading-one',
          enabled: false
        },
        {
          id: 'region',
          enabled: false
        }]
      });
    });
    it('Passes a11y test', () => {
      mount(<Button />);
      cy.checkA11y();
    });
  });
});
