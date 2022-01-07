import { useTheme, createUseStyles as originalUseStyles } from 'react-jss';

/**
 * Return method to create classes with theme included in props
 * @param styles
 * @returns {*}
 */
export const createUseStyles = (styles) => (props) => {
  const theme = useTheme();
  return originalUseStyles(styles)({ ...theme, ...props });
};
