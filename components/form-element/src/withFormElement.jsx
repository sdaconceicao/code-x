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
    label, required, optional, error, id, ...rest
  }) => (
    <FormElementWrapper
      label={label}
      required={required}
      optional={optional}
      error={error}
      id={id}
    >
      <FormElement id={id} doValidate={doValidate} getValue={getValue} {...rest} />
    </FormElementWrapper>
  );
};

export default withFormElement;
