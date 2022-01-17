import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form, font }) => ({
  rte: {
    border: ({ errors }) => (errors ? form.errorBorder : form.border),
    borderRadius: form.borderRadius
  },
  content: {
    padding: form.padding,
    borderTop: ({ errors }) => (errors ? form.errorBorder : form.border),
    boxShadow: 'none!important',
    backgroundColor: form.backgroundColor,
    borderRadius: [0, 0, form.borderRadius, form.borderRadius],
    ...font,
    '& p': {
      margin: '.5rem 0'
    }
  }
}));
