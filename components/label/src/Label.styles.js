import { createUseStyles } from 'react-jss';

export default createUseStyles(({ palette }) => ({

  label: {
    color: palette.mediumDark,
    display: ({ inline }) => (inline ? 'inline' : 'block')
  },
  required: {
    color: palette.error
  },
  optional: {
    fontStyle: 'italic',
    color: palette.mediumDark,
    float: 'right'
  }
}));
