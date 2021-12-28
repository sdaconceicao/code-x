import { useTheme } from 'react-jss';

/**
 * Retrieve icons for a theme
 * @param styles
 * @returns {*}
 */
export const useIcons = () => {
  const theme = useTheme();
  return theme.icons;
};

export default useIcons;
