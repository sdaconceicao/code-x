import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form, font, palette }) => ({
  fieldset: {
    border: 'none',
    outline: form.border,
    borderRadius: form.borderRadius,
    backgroundColor: form.controlBackgroundColor,
    borderColor: ({ errors }) => (errors ? palette.error : form.borderColor),
    paddingTop: '0.5rem',
    borderWidth: 4,
    marginTop: '1.5rem',
    position: 'relative'
  },
  legend: {
    color: form.labelColor,
    position: 'absolute',
    top: '-1.25rem',
    left: 0,
    ...font
  },
  required: {
    color: palette.error
  }
}));
