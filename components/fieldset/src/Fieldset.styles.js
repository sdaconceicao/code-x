import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form }) => ({
  fieldset: {
    border: form.border,
    borderRadius: form.borderRadius,
    paddingTop: '1.5rem',
    margin: form.margin
  }
}));
