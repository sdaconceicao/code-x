import { i18n } from '@code-x/i18n';

export default ({ name, required, value }) => {
  if (!required) return { passed: true };
  const passed = value?.length > 0;
  return {
    passed,
    error: passed ? undefined : i18n.getMessage('validators.required', { name })
  };
};
