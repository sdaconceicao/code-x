import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ palette, form }) => ({
  input: {
    border: form.border,
    borderRadius: ({ withButton }) => (withButton ? `${form.borderRadius} 0 0 ${form.borderRadius}` : form.borderRadius),
    padding: form.padding,
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 1pt ${form.focusColor}`
    }
  },
  error: {
    borderColor: palette.error
  }
}));
