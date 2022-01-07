import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ palette, form }) => ({
  alert: {
    borderRadius: form.borderRadius,
    border: form.border,
    color: form.color,
    backgroundColor: form.backgroundColor,
    padding: '1rem',
    display: 'flex'
  },
  success: {
    borderColor: palette.successDark,
    color: palette.successDark,
    backgroundColor: palette.successLight
  },
  error: {
    borderColor: palette.errorDark,
    color: palette.errorDark,
    backgroundColor: palette.errorLight
  },
  warning: {
    borderColor: palette.warningDark,
    color: palette.warningDark,
    backgroundColor: palette.warningLight
  },
  info: {
    borderColor: palette.infoDark,
    color: palette.infoDark,
    backgroundColor: palette.infoLight
  },
  icon: {
    marginRight: '.5rem'
  },
  content: {}
}));
