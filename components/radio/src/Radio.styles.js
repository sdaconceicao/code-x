import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ palette, form, font }) => ({
  label: {
    display: 'grid',
    gridTemplateColumns: '1rem auto',
    gap: '.35rem',
    color: form.labelColor,
    ...font
  },
  radio: {
    appearance: 'none',
    backgroundColor: form.backgroundColor,
    margin: 0,
    font: 'inherit',
    color: palette.primary,
    width: '1.1rem',
    height: '1.1rem',
    border: `1px solid ${form.borderColor}`,
    borderRadius: '50%',
    transform: 'translateY(-0.075rem)',
    display: 'grid',
    placeContent: 'center',
    '&::before': {
      content: '""',
      width: '0.65rem',
      height: '0.65rem',
      borderRadius: '50%',
      transform: 'scale(0)',
      transition: '120ms transform ease-in-out',
      boxShadow: `inset 1rem 1rem ${palette.primary}`
    },
    '&:checked::before': {
      transform: 'scale(1)'
    },
    '&:focus': {
      outline: `max(2px, 0.15rem) solid ${form.focusColor}`
    },
    '&:disabled': {
      color: form.disabledColor,
      cursor: 'not-allowed'
    }
  },
  error: {
    borderColor: palette.error
  }
}));
