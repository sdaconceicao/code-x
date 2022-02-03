import { createUseStyles } from 'react-jss';

export default createUseStyles(({ font, form, palette }) => ({
  label: {
    color: form.labelColor,
    display: ({ inline }) => (inline ? 'inline' : 'block'),
    ...font
  },
  required: {
    color: palette.error
  },
  optional: {
    fontStyle: 'italic',
    color: palette.labelColor,
    float: 'right'
  }
}));
