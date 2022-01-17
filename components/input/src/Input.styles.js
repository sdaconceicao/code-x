import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form, font }) => ({
  input: {
    border: ({ errors }) => (errors ? form.errorBorder : form.border),
    borderRadius: ({ withButton }) =>
      withButton ? `${form.borderRadius} 0 0 ${form.borderRadius}` : form.borderRadius,
    padding: form.padding,
    backgroundColor: form.backgroundColor,
    width: ({ inline }) => (inline ? 'inherit' : '100%'),
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 1pt ${form.focusColor}`
    },
    ...font
  }
}));
