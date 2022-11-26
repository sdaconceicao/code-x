import React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import { componentRuleExclusions } from '@code-x/cypress-config';
import * as stories from './Button.template';

const { Button } = composeStories(stories);

describe('Button', () => {
  describe('A11y', () => {
    beforeEach(() => {
      cy.injectAxe();
      cy.configureAxe(componentRuleExclusions);
    });
    it('Passes a11y test', () => {
      mount(<Button>Lorem</Button>);
      cy.checkA11y();
    });
  });
});
