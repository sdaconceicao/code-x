import React  from 'react';
import FormElementWrapper from './FormElementWrapper';

export const withFormElement = (FormElement) => {
  return ({
    // eslint-disable-next-line react/prop-types
    label, required, optional, error, id, ...rest
  }) => {
    return (
      <FormElementWrapper
        label={label}
        required={required}
        optional={optional}
        error={error}
        id={id}
      >
        <FormElement id={id} {...rest} />
      </FormElementWrapper>
    );
  }
};

export default withFormElement;
