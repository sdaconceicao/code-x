import React from 'react';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { ThemeProvider, createUseStyles } from 'react-jss';
import { IntlProvider } from 'react-intl'
import theme from '@code-x/theme';
import { enUSMessages as enUSLabelMessages } from '@code-x/label';

const messages = { ...enUSLabelMessages };
const useStyles = createUseStyles({
    '@global': {
        html: {
        boxSizing: 'border-box',
        },
        '*': {
        boxSizing: 'inherit'
        }
    }
});

const withI18nProvider = (Story) => (
  <IntlProvider messages={messages} locale="en" defaultLocale="en">
    <Story />
  </IntlProvider>
)

const withThemeProvider = (Story,context) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Story classes={classes} {...context}/>
    </ThemeProvider>
  )
}

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    }
});

export const decorators = [withThemeProvider, withI18nProvider];
