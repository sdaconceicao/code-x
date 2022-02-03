import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider, createUseStyles } from 'react-jss';
import { I18nProvider } from '@code-x/i18n';
import theme, { dark } from '@code-x/theme';
import { enUSMessages as enUSLabelMessages } from '@code-x/label';
import { enUSMessages as enUSValidationMessages } from '@code-x/validators';
import { enUSMessages as enUSSelectMessages } from '@code-x/select';
import storybookTheme from './theme';

const messages = { ...enUSLabelMessages, ...enUSValidationMessages, ...enUSSelectMessages };
const useStyles = createUseStyles({
  '@global': {
    html: {
      boxSizing: 'border-box'
    },
    '*': {
      boxSizing: 'inherit'
    }
  }
});

const withI18nProvider = (Story) => (
  <I18nProvider messages={messages} locale="en">
    <Story />
  </I18nProvider>
);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: storybookTheme
  }
});

export const decorators = [withThemes(ThemeProvider, [theme, dark]), withI18nProvider];
