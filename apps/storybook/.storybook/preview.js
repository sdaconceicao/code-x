import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider, createUseStyles } from 'react-jss';
import theme from '@code-x/theme';

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
    },
});

export const decorators = [withThemeProvider, withA11y];
