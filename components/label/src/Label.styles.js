import { createUseStyles } from 'react-jss';

export default createUseStyles(({ font, palette }) => ({
  label: {
    color: palette.mediumDark,
    display: ({ inline }) => (inline ? 'inline' : 'block'),
    ...font
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
