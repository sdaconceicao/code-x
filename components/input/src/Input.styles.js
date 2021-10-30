import { createUseStyles } from 'react-jss';

export default createUseStyles({
  input: {
    border: ({ form }) => form.border,
    borderRadius: ({ form }) => form.border,
    height: ({ form }) => form.height,
    padding: '0 .5rem'
  },
  label: {
    display: 'block',
    color: ({ palette }) => palette.mediumDark
  },
  withButton: {
    width: 'calc(100% - 2rem)',
    display: 'inline-block',
    borderRadius: ({ form }) => `${form.borderRadius} 0 0 ${form.borderRadius}`,
    borderRight: 'none'
  },
  error: {
    borderColor: ({ palette }) => palette.error
  }
});
