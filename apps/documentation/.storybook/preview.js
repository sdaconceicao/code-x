import React from 'react';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { ThemeProvider, createUseStyles } from 'react-jss';
import { I18nProvider } from '@code-x/i18n';
import theme from '@code-x/theme';
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

const withThemeProvider = (Story, context) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Story classes={classes} {...context} />
    </ThemeProvider>
  );
};

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: storybookTheme
  }
});

export const decorators = [withThemeProvider, withI18nProvider];
