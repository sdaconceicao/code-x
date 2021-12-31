import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ palette, form }) => ({
  button: {
    borderRadius: ({ withInput }) => (withInput
      ? `0 ${form.borderRadius} ${form.borderRadius} 0`
      : form.borderRadius),
    borderWidth: ({ withInput }) => (withInput ? '1px 1px 1px 0' : 1),
    borderStyle: 'solid',
    cursor: 'pointer',
    transition: form.transition,
    display: ({ display }) => display,
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 1pt ${form.focusColor}`
    }
  },
  active: {},
  primary: {
    backgroundColor: palette.primaryBg,
    color: palette.primaryFg,
    borderColor: palette.primaryBorder,
    '&:hover, &$active': {
      backgroundColor: palette.primaryBgHover,
      color: palette.primaryFgHover,
      borderColor: palette.primaryBorderHover
    }
  },
  secondary: {
    backgroundColor: palette.secondaryBg,
    color: palette.secondaryFg,
    borderColor: palette.secondaryBorder,
    '&:hover, &$active': {
      backgroundColor: palette.secondaryBgHover,
      color: palette.secondaryFgHover,
      borderColor: palette.secondaryBorderHover
    }
  },
  tertiary: {
    backgroundColor: palette.tertiaryBg,
    color: palette.tertiaryFg,
    borderColor: palette.tertiaryBorder,
    '&:hover, &$active': {
      backgroundColor: palette.tertiaryBgHover,
      color: palette.tertiaryFgHover,
      borderColor: palette.tertiaryBorderHover
    }
  },
  sm: {
    padding: '.5rem',
    fontSize: '.5rem'
  },
  md: {
    padding: form.padding,
    fontSize: '.75rem'
  },
  lg: {
    padding: '.75rem',
    fontSize: '1rem'
  }
}));
