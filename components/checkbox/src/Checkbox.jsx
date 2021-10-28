import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import useStyles from './Checkbox.styles';

export const Checkbox = ({
    id, name, value, className, label, errors,
    onKeyDown, onChange, onBlur, onEnter, 
    ...rest
}) => {
    const [checked, setChecked] = useState(rest.checked);
    const theme = useTheme();
    const classes = useStyles({...rest, ...theme});
    const handleChange = (e) => {
        setChecked(e.target.checked);
        onChange({
            name,
            checked: e.target.checked,
            value: e.target.value,
            dirty: true
        });
    };

    return (
        <label htmlFor={id} className={classes.label}>{label}
            <input
                id={id}
                type="checkbox"
                name={name}
                className={`${classes.input} ${className} ${errors ? 'error' : ''}`}
                onChange={handleChange}
                checked={checked}
                value={value}
                {...rest}/>
            </label>
    )
}

Checkbox.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.instanceOf(Array),
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    onChange: () => {}
}

export default Checkbox;