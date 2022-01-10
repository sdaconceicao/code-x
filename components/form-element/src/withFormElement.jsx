/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FormElementWrapper from './FormElementWrapper';

export const withFormElement =
  (FormElement) =>
  ({ className, label, required, optional, error, inline, id, hideLabel, ...rest }) =>
    (
      <FormElementWrapper
        className={className}
        label={hideLabel ? null : label}
        required={required}
        optional={optional}
        error={error}
        id={id}
        inline={inline}
      >
        <FormElement id={id} label={label} error={error} required={required} {...rest} />
      </FormElementWrapper>
    );

export default withFormElement;
