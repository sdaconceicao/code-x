/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FormElementWrapper from './FormElementWrapper';

export const withFormElement =
  (FormElement) =>
  ({ className, label, required, optional, inline, id, hideLabel, ...rest }) =>
    (
      <FormElementWrapper
        className={className}
        label={hideLabel ? null : label}
        required={required}
        optional={optional}
        id={id}
        inline={inline}
      >
        <FormElement id={id} label={label} required={required} {...rest} />
      </FormElementWrapper>
    );

export default withFormElement;
