import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  children, disabled, className, onClick, type, ...rest
}) => (
  <button className={className} type={type} onClick={onClick} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  id: '',
  disabled: false,
  type: 'button',
  className: '',
  onClick: undefined
};

export default Button;
