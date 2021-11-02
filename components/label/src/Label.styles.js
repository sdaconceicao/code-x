import { createUseStyles } from 'react-jss';

export default createUseStyles({
  label: {
    color: ({ palette }) => palette.mediumDark,
    display: ({ inline }) => (inline ? 'inline' : 'block')
  },
  required: {
    color: ({ palette }) => palette.error
  },
  optional: {
    fontStyle: 'italic',
    color: ({ palette }) => palette.mediumDark,
    float: 'right'
  }
});
