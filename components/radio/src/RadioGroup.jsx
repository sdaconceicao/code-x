import React, {
  useState, Children, cloneElement, useImperativeHandle
} from 'react';
import PropTypes from 'prop-types';
import { Fieldset } from '@code-x/fieldset';
import { withFormElement } from '@code-x/form-element';
import { doValidate, required as requiredValidator } from '@code-x/validators';
import useStyles from './RadioGroup.styles';

const RadioGroup = ({
  label, children, onBlur, onChange, required, name, innerRef, value, errors
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [localErrors, setLocalErrors] = useState(errors);
  const classes = useStyles();

  const validate = () => {
    const response = doValidate({
      name: label || name, value: localValue, required
    }, [requiredValidator]);
    setLocalErrors(response.errors);
    return { ...response, value: localValue };
  };

  const handleChange = (response) => {
    setLocalValue(response.value);
    onChange({ name, ...response });
  };

  const handleBlur = (e) => {
    const response = validate();
    onBlur({ ...e, errors: response.errors });
  };

  useImperativeHandle(innerRef, () => ({
    doValidate: validate
  }));

  return (
    <span ref={innerRef}>
      <Fieldset
        label={label}
        required={required}
        onBlur={handleBlur}
        errors={localErrors}
        className={classes.formElement}
      >
        {Children.map(children, (child) => (
          cloneElement(child, {
            onChange: handleChange,
            onBlur: handleBlur,
            checked: localValue === child.props.value,
            addFormElement: false
          })
        ))}
      </Fieldset>
    </span>

  );
};

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  errors: PropTypes.instanceOf(Array),
  label: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) })
  ]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string
};

RadioGroup.defaultProps = {
  errors: undefined,
  label: undefined,
  innerRef: undefined,
  onBlur: () => {},
  onChange: () => {},
  required: false,
  value: undefined
};

const RadioGroupFormElement = (props) => withFormElement(RadioGroup)({ hideLabel: true, ...props });
RadioGroupFormElement.displayName = 'RadioGroup';

export default RadioGroupFormElement;
