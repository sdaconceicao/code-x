export default (props, validators) => {
  let errors;
  validators.forEach(validator => {
    const result = validator(props);
    if (!result.valid) {
      if (!errors) errors = [result.error];
      else errors.push(result.error);
    }
  });
  return {
    valid: errors === undefined,
    errors
  };
};
