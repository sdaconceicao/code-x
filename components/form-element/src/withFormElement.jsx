import React from 'react';
import FormElementWrapper from './FormElementWrapper';

export const withFormElement = (FormElement) => {
  const doValidate = (e) => {
    console.log(e);
  };
  const getValue = (e) => {
    console.log(e);
  };
  return ({
    // eslint-disable-next-line react/prop-types
    label, required, optional, error, ...rest
  }) => (
    <FormElementWrapper
      label={label}
      required={required}
      optional={optional}
      error={error}
    >
      <FormElement doValidate={doValidate} getValue={getValue} {...rest} />
    </FormElementWrapper>
  );
};

export default withFormElement;
