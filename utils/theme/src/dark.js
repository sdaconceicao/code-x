import { FaTimesCircle, FaExclamationCircle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const colors = {
  primary: '#1a4171',
  primaryDark: '#1a4171',
  primaryLight: '#308ce6',
  secondary: '#777',
  secondaryDark: '#888',
  secondaryLight: '#999',
  tertiary: '#646464',
  tertiaryDark: '#202221',
  tertiaryLight: '#a2aaa5',
  success: '#439843',
  successDark: '#2c572c',
  successLight: '#b5eeb5',
  warning: '#f79722',
  warningDark: '#764612',
  warningLight: '#ffca88',
  error: '#de4045',
  errorDark: '#762427',
  errorLight: '#ffbbbb',
  info: '#2a7bca',
  infoDark: '#1a4171',
  infoLight: '#c3ecff',
  white: '#fff',
  g100: '#f1f1f1',
  g200: '#eee',
  g300: '#ddd',
  g400: '#a7a7a7',
  g500: '#808080',
  g600: '#666',
  g700: '#222',
  black: '#000'
};

const theme = {
  name: 'dark',
  form: {
    border: `1px solid ${colors.g400}`,
    borderColor: colors.g400,
    borderRadius: '.25rem',
    errorBorder: `1px solid ${colors.error}`,
    labelColor: colors.g300,
    margin: '0 .5rem 1rem',
    padding: '.5rem',
    height: '2.25rem',
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    focusColor: colors.primary,
    focusColorText: colors.white,
    disabledColor: colors.g600,
    backgroundColor: colors.g500,
    controlBackgroundColor: colors.g600
  },
  palette: {
    primaryBg: colors.primary,
    primaryFg: colors.white,
    primaryBorder: colors.primary,
    primaryBgHover: colors.primaryDark,
    primaryFgHover: colors.white,
    primaryBorderHover: colors.primaryDark,
    secondaryBg: colors.secondary,
    secondaryFg: colors.g300,
    secondaryBorder: colors.secondaryDark,
    secondaryBgHover: colors.secondaryDark,
    secondaryFgHover: colors.white,
    secondaryBorderHover: colors.secondaryDark,
    tertiaryBg: colors.tertiary,
    tertiaryFg: colors.g200,
    tertiaryBorder: colors.tertiary,
    tertiaryBgHover: colors.tertiaryDark,
    tertiaryFgHover: colors.g300,
    tertiaryBorderHover: colors.tertiaryDark,
    ...colors
  },
  font: {
    fontFamily: "'Roboto', 'Arial', 'sans-serif'",
    fontSize: '.9rem'
  },
  icons: {
    success: FaCheckCircle,
    error: FaTimesCircle,
    warning: FaExclamationCircle,
    info: FaInfoCircle
  }
};

export default theme;
