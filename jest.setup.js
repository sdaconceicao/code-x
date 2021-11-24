import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './apps/documentation/.storybook/preview';

const { getComputedStyle } = window;

// Adding theming/i18n providers to all tests via storybook preview
setGlobalConfig(globalStorybookConfig);
// Required to fix jsdom / axe errors in jest tests due to missing feature
window.getComputedStyle = (elt) => getComputedStyle(elt);
