import React, { useState, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Fieldset } from '@code-x/fieldset';

const RadioGroup = ({ label, children, onChange }) => {
  const [selected, setSelected] = useState();
  const handleChange = (response) => {
    setSelected(response.value);
    onChange(response);
  };

  return (
    <Fieldset label={label}>
      {Children.map(children, (child) => (
        cloneElement(child, { onChange: handleChange, checked: selected === child.props.value })
      ))}
    </Fieldset>
  );
};

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
};

RadioGroup.defaultProps = {
  label: undefined,
  onChange: () => {}
};

export default RadioGroup;
