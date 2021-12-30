import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form }) => ({
  controlGroup: {
    margin: '0 .5rem .5rem 0',
    display: 'inline-block!important',
    '&:last-child': {
      marginRight: 0
    },
    '& svg': {
      marginTop: '2px'
    }
  },
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
