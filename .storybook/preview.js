import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(withInfo); 
addDecorator(withA11y);