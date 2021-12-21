import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ palette, form }) => ({
  formComponent: {
    margin: form.margin,
    display: ({ inline }) => (inline ? 'inline-block' : 'block')
  },
  error: {
    color: palette.error
  },
  label: {
    display: ({ inline }) => (inline ? 'inline-block' : 'block')
  },
  childWrapper: {
    display: ({ flex, inline }) => (flex ? 'flex' : inline ? 'inline-block' : 'block')
  }
}));
