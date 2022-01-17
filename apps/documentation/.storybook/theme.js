import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Code-X',
  brandUrl: 'https://sdaconceicao.github.io/code-x',

  colorPrimary: '#ff0000',
  colorSecondary: '#cc0000',

  // UI
  appBg: '#555',
  appContentBg: '#bbb',
  appBorderColor: 'grey',
  appBorderRadius: 4,
  textColor: '#000',
  textInverseColor: '#fff',
  textMutedColor: '#444',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#222',
  barBg: 'grey',

  // Form colors
  inputBg: 'grey',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 4
});
