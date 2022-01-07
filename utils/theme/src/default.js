import {
  FaTimesCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaCheckCircle,
  FaInfo
} from 'react-icons/fa';

const colors = {
  primary: '#2171bb',
  primaryDark: '#1a4171',
  primaryLight: '#308ce6',
  secondary: '#ccc',
  secondaryDark: '#9a9a9a',
  secondaryLight: '#e0e0e0',
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
  g600: '#333',
  g700: '#010101',
  black: '#000'
};

const theme = {
  form: {
    border: `1px solid ${colors.g400}`,
    borderColor: colors.g400,
    borderRadius: '.25rem',
    errorBorder: `1px solid ${colors.error}`,
    margin: '0 .5rem 1rem',
    padding: '.5rem',
    height: '2.25rem',
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    focusColor: colors.primary,
    focusColorText: colors.white,
    disabledColor: colors.g300,
    backgroundColor: colors.g200
  },
  palette: {
    primaryBg: colors.primary,
    primaryFg: colors.white,
    primaryBorder: colors.primary,
    primaryBgHover: colors.primaryDark,
    primaryFgHover: colors.white,
    primaryBorderHover: colors.primaryDark,
    secondaryBg: colors.secondary,
    secondaryFg: colors.g600,
    secondaryBorder: colors.secondaryDark,
    secondaryBgHover: colors.secondaryDark,
    secondaryFgHover: colors.white,
    secondaryBorderHover: colors.secondaryDark,
    tertiaryBg: colors.tertiary,
    tertiaryFg: colors.white,
    tertiaryBorder: colors.tertiary,
    tertiaryBgHover: colors.tertiaryDark,
    tertiaryFgHover: colors.g100,
    tertiaryBorderHover: colors.tertiaryDark,
    ...colors
  },
  fonts: {
    fontFamily: 'arial'
  },
  icons: {
    success: FaCheckCircle,
    error: FaTimesCircle,
    warning: FaExclamationCircle,
    info: FaInfoCircle
  }
};

export default theme;
