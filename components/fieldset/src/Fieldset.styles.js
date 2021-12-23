import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form, palette }) => ({
  fieldset: {
    border: form.border,
    borderRadius: form.borderRadius,
    backgroundColor: form.backgroundColor,
    borderColor: ({ errors }) => (errors ? palette.error : form.borderColor),
    paddingTop: '1.5rem',
    margin: form.margin
  },
  legend: {
    color: form.color
  },
  required: {
    color: palette.error
  }
}));
