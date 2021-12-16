export default (props, validators) => {
  let errors;
  validators.forEach(validator => {
    const result = validator(props);
    if (!result.passed) {
      if (!errors) errors = [result.error];
      else errors.push(result.error);
    }
  });
  return {
    passed: errors === undefined,
    errors
  };
};
