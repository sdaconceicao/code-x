import { useTheme, createUseStyles } from 'react-jss';

/**
 * Return method to create classes with theme included in props
 * @param styles
 * @param props
 * @returns {*}
 */
export default (styles, props) => {
  const theme = useTheme();
  return createUseStyles(styles)({...theme, ...props});
}
