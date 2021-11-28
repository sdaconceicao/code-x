import { createUseStyles } from '@code-x/theme';

const styles = ({ form }) => ({
  input: {
    border: form.border,
    borderRadius: ({withButton}) => withButton ? `${form.borderRadius} 0 0 ${form.borderRadius}` : form.borderRadius,
    padding: form.padding,
  },
  error: {
    borderColor: ({ palette }) => palette.error
  }
});

export default createUseStyles(styles);
