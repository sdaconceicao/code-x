import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form }) => ({
  toolbar: {
    padding: [form.padding, form.padding, 0],
    backgroundColor: form.controlBackgroundColor,
    borderRadius: [form.borderRadius, form.borderRadius, 0, 0]
  },
  controlGroup: {
    margin: '0 .5rem .5rem 0',
    display: 'inline-block!important',
    '&:last-child': {
      marginRight: 0
    },
    '& svg': {
      marginTop: '2px'
    }
  }
}));
