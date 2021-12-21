import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form }) => ({
  textarea: {
    border: ({ errors }) => (errors ? form.errorBorder : form.border),
    borderRadius: ({ withButton }) => (withButton ? `${form.borderRadius} 0 0 ${form.borderRadius}` : form.borderRadius),
    padding: form.padding,
    backgroundColor: form.backgroundColor,
    width: '100%',
    resize: ({ resize }) => resize,
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 1pt ${form.focusColor}`
    }
  }
}));
