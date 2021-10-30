import { createUseStyles } from 'react-jss';

export default createUseStyles({
  error: {
    borderColor: ({ palette }) => palette.error
  },
  label: {
    display: 'block'
  }
});
