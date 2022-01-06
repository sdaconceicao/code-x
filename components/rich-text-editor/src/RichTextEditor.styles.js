import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form }) => ({
  content: {
    border: form.border,
    borderRadius: [0, 0, form.borderRadius, form.borderRadius],
    padding: form.padding,
    borderTop: 'none',
    boxShadow: 'none!important',
    '& p': {
      margin: '.5rem 0'
    }
  }
}));
