import { createUseStyles } from 'react-jss';

export default createUseStyles({
  formComponent: {

  },
  error: {
    borderColor: ({ palette }) => palette.error
  },
  label: {
    display: 'block'
  }
});
