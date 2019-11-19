import { configure } from '@storybook/react';

configure([
    require.context('../stories', true, /\.stories\.js$/),
    require.context('../packages', true, /\.stories\.jsx$/)
  ], module);
