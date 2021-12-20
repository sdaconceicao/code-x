import React, {
  useState, useImperativeHandle, useEffect, useRef
} from 'react';
import PropTypes from 'prop-types';
import { withFormElement } from '@code-x/form-element';
import { doValidate, required as requiredValidator } from '@code-x/validators';
import { i18n } from '@code-x/i18n';
import useStyles from './Select.styles';

export const SelectComponent = ({
  name, value, className, label, innerRef, required, errors,
  options, placeholderText,
  getDisplayValue, onChange, onBlur
}) => {
  const getOptionFromValue = (val) => options?.find(option => option.value === val);
  const [localValue, setLocalValue] = useState(getOptionFromValue(value));
  const [localErrors, setLocalErrors] = useState(errors);
  const [open, setOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);
  const dropdownListRef = useRef();
  const classes = useStyles({ open, errors: localErrors });

  const getPlaceholderText = () => placeholderText || i18n.getMessage('select.placeholder');
  const getDisplayText = () => (
    localValue
      ? getDisplayValue(localValue)
      : getPlaceholderText()
  );

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    setLocalValue(option);
    onChange({ name, value: option.value });
    setOpen(false);
  };

  const focusableOptions = dropdownListRef.current?.querySelectorAll('button');
  const focusOption = (index) => {
    if (index < 0 || index >= focusableOptions.length) {
      setOpen(false);
    } else {
      focusableOptions[index].focus();
      setFocusIndex(index);
    }
  };

  const handleKeyDown = (e) => {
    // eslint-disable-next-line default-case
    switch (e.key) {
      case 'Escape':
      case 'Tab': // Close the dropdown to avoid tabbing through focusable options within dropdown
        e.stopPropagation();
        setOpen(false);
        break;
      case 'ArrowDown':
        focusOption(focusIndex + 1);
        e.stopPropagation();
        break;
      case 'ArrowUp':
        focusOption(focusIndex - 1);
        e.stopPropagation();
        break;
    }
  };

  const validate = () => {
    const response = doValidate({
      name: label || name, value: localValue.value, required
    }, [requiredValidator]);
    setLocalErrors(response.errors);
    return {
      errors: response.errors,
      value: localValue.value,
      valid: response.passed
    };
  };

  useImperativeHandle(innerRef, () => ({
    doValidate: validate
  }));

  useEffect(() => {
    if (!open) {
      setFocusIndex(-1);
    }
  }, [open]);

  useEffect(() => {
    setLocalErrors(errors);
  }, [errors]);
  const renderOptions = () => (
    options?.map(option => (
      <li className={classes.option} key={option.value}>
        <button
          className={classes.optionButton}
          type="button"
          onClick={() => handleSelect(option)}
          onKeyDown={handleKeyDown}
        >
          {option.displayName}
        </button>
      </li>
    ))
  );

  return (
    <div
      className={`${classes.select} ${className}`}
      ref={innerRef}
      aria-expanded={open}
    >
      <button
        type="button"
        className={`${classes.selectButton} ${open ? classes.selectButtonOpen : ''}`}
        onBlur={onBlur}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
      >
        <span className={classes.buttonContent}>{getDisplayText()}</span>
      </button>
      <div className={classes.dropdown}>
        <ul className={classes.dropdownList} ref={dropdownListRef}>
          {renderOptions()}
        </ul>
      </div>
    </div>
  );
};

SelectComponent.propTypes = {
  /** Classname to override default element styling */
  className: PropTypes.string,
  /** Errors array from form validation */
  errors: PropTypes.instanceOf(Array),
  /** Ref for input */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) })
  ]),
  /** Label for element */
  label: PropTypes.string,
  /** HTML name of element */
  name: PropTypes.string.isRequired,
  /** Callback for blur event */
  onBlur: PropTypes.func,
  /** Callback for change event */
  onChange: PropTypes.func,
  /** Is Input required */
  required: PropTypes.bool,
  /** HTML value of element */
  value: PropTypes.string,
  /** Function to return how to display the selected value */
  getDisplayValue: PropTypes.func,
  /** HTML options in json array format */
  options: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  /** Text to display within select if no value is set */
  placeholderText: PropTypes.string

};

SelectComponent.defaultProps = {
  className: '',
  errors: undefined,
  innerRef: undefined,
  label: '',
  onBlur: () => {},
  onChange: () => {},
  required: false,
  value: undefined,
  getDisplayValue: (value) => value.displayName,
  placeholderText: undefined
};

const SelectFormElement = withFormElement(SelectComponent);
SelectFormElement.displayName = 'Select';

export default SelectFormElement;
