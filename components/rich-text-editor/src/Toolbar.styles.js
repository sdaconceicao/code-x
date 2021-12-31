import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form }) => ({
  toolbar: {
    padding: [form.padding, form.padding, 0],
    border: form.border,
    backgroundColor: form.backgroundColor,
    borderRadius: [form.borderRadius, form.borderRadius, 0, 0]
  }
}));