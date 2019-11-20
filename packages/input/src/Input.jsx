import React, { useState } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './Input.styles';

export const Input = ({
    id, classes, className, label, errors, value,
    onKeyDown, onChange, onBlur, onEnter, 
    ...rest
}) => {
    const [val, setValue] = useState(value);

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange({
            name: rest.name,
            value: e.target.value,
            dirty: true
        });
    };

    const handleKeyDown = (e) =>{
        if(e.keyCode === 13 && onEnter){
            e.preventDefault();
            onEnter();
        }
        onKeyDown(e);
    };

    return (
        <>
            <label htmlFor={id} className={classes.label}>
                {label}
            </label>
            <input
                id={id}
                className={`form-control ${className} ${errors ? 'error' : ''}`}
                value={val}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onBlur={onBlur}
                {...rest}
            />
        </>
    )
}

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    errors: PropTypes.instanceOf(Array),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func
};

Input.defaultProps = {
    onChange: () => {},
    onKeyDown: () => {}
}

export default injectSheet(styles)(Input)