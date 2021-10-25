import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addDecorator(withA11y);
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});