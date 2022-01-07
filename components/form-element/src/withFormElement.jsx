import React from 'react';
import FormElementWrapper from './FormElementWrapper';

export const withFormElement =
  (FormElement) =>
  ({
    // eslint-disable-next-line react/prop-types
    className,
    label,
    required,
    optional,
    error,
    inline,
    id,
    hideLabel,
    ...rest
  }) =>
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
