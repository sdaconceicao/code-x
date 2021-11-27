import { createUseStyles } from '@code-x/theme';

const styles = ({ palette, form }) => ({
  button: {
    padding: 5,
    borderRadius: form.borderRadius,
    cursor: 'pointer',
    transition: form.transition
  },
  primary: {
    backgroundColor: palette.primaryBg,
    color: palette.primaryFg,
    borderColor: palette.primaryBorder,
    "&:hover":{
      backgroundColor: palette.primaryBgHover,
      color: palette.primaryFgHover,
      borderColor: palette.primaryBorderHover,
    }
  },
  secondary: {
    backgroundColor: palette.secondaryBg,
    color: palette.secondaryFg,
    borderColor: palette.secondaryBorder,
    "&:hover":{
      backgroundColor: palette.secondaryBgHover,
      color: palette.secondaryFgHover,
      borderColor: palette.secondaryBorderHover,
    }
  },
  tertiary: {
    backgroundColor: palette.tertiaryBg,
    color: palette.tertiaryFg,
    borderColor: palette.tertiaryBorder,
    "&:hover":{
      backgroundColor: palette.tertiaryBgHover,
      color: palette.tertiaryFgHover,
      borderColor: palette.tertiaryBorderHover,
    }
  },
  disabled: {

  }
});

export default createUseStyles(styles);
