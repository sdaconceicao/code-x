import { i18n } from '@code-x/i18n';

export default ({ name, required, value }) => {
  if (!required) return { valid: true };
  const valid = value?.length > 0;
  return {
    valid,
    error: valid ? undefined : i18n.getMessage('validators.required', { name })
  };
};
