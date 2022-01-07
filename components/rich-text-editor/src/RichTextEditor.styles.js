import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form }) => ({
  rte: {
    border: ({ errors }) => (errors ? form.errorBorder : form.border),
    borderRadius: form.borderRadius
  },
  content: {
    padding: form.padding,
    borderTop: ({ errors }) => (errors ? form.errorBorder : form.border),
    boxShadow: 'none!important',
    '& p': {
      margin: '.5rem 0'
    }
  }
}));
