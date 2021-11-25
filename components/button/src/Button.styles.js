import { createUseStyles } from '@code-x/theme';

const styles = ({ palette, form }) => ({
  button: {
    padding: 5,
    borderRadius: form.borderRadius
  },
  primary: {
    color: palette.primary
  },
  secondary: {
    color: palette.success
  }
});

export default createUseStyles(styles);
