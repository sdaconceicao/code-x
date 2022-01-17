import { createUseStyles } from '@code-x/theme';

export default createUseStyles(({ form, font }) => ({
  select: {},
  selectButton: {
    position: 'relative',
    border: form.border,
    padding: form.padding,
    backgroundColor: form.backgroundColor,
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    borderRadius: form.borderRadius,
    ...font,
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 1pt ${form.focusColor}`
    }
  },
  selectButtonOpen: {
    borderRadius: [form.borderRadius, form.borderRadius, 0, 0]
  },
  buttonContent: {
    width: 'calc(100% - 20px)',
    display: 'inline-block',
    '&:before': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      height: 33,
      width: 29,
      backgroundColor: form.controlBackgroundColor,
      borderRadius: [0, 3, 3, 0],
      borderLeft: `1px solid ${form.borderColor}`
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      right: 12,
      top: ({ open }) => (open ? 15 : 12),
      border: `solid ${form.borderColor}`,
      borderWidth: [0, 1, 1, 0],
      display: 'inline-block',
      padding: 3,
      transition: '250ms transform ease-in-out',
      transform: ({ open }) => (open ? 'rotate(-135deg)' : 'rotate(45deg)')
    }
  },
  dropdownList: {
    display: ({ open }) => (open ? 'block' : 'none'),
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
    maxHeight: '100vh',
    borderRadius: [0, 0, form.borderRadius, form.borderRadius],
    backgroundColor: form.backgroundColor,
    border: `1px solid ${form.borderColor}`,
    borderTop: 'none'
  },
  option: {
    borderBottom: `1px solid ${form.borderColor}`,
    ...font,
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  optionButton: {
    backgroundColor: 'transparent',
    border: 'none',
    width: '100%',
    cursor: 'pointer',
    textAlign: 'left',
    padding: 5,
    '&:hover, &:focus': {
      backgroundColor: form.focusColor,
      color: form.focusColorText,
      outline: 'none',
      boxShadow: `0 0 0 1pt ${form.focusColor}`
    },
    '$option:last-child &': {
      '&:hover, &:focus': {
        borderRadius: [0, 0, form.borderRadius, form.borderRadius]
      }
    }
  }
}));
