import { createUseStyles } from 'react-jss';

export default createUseStyles({
  formComponent: {
    margin: '0 0 1rem'
  },
  error: {
    borderColor: ({ palette }) => palette.error
  },
  label: {
    display: 'block'
  }
});
