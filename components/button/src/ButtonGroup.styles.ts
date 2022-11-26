import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form }) => ({
  buttonGroup: {
    display: ({ display }) => display,
    '& > button': {
      borderRadius: 0,
      '&:not(:last-child)': {
        borderRight: 'none'
      },
      '&:first-child': {
        borderRadius: [form.borderRadius, 0, 0, form.borderRadius]
      },
      '&:last-child': {
        borderRadius: [0, form.borderRadius, form.borderRadius, 0]
      }
    }
  }
}));
