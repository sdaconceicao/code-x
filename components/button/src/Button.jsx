import React from "react";
import PropTypes from 'prop-types';

export const Button = ({ children, disabled, className, onClick, type, ...rest }) => {
    return (
        <button className={className} type={type} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['submit', 'button']),
    onClick: PropTypes.func,
    children: PropTypes.node
};

Button.defaultProps = {
    disabled: false,
    type: 'button',
    className: ''
};

export default Button;