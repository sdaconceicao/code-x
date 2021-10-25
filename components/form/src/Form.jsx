import React from 'react';
import PropTypes from 'prop-types';

import {FormContext} from './Form.context';

export const Form = ({children, className, ...rest}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        //TODO
    };

    const onChange = (name, value) => {
        //TODO
    };

    return (
        <FormContext.Provider value={{
            onChange
        }}>
            <form onSubmit={onSubmit} className={`${className}`}>
                {children}
            </form>
        </FormContext.Provider>
    )
    
};

Form.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};

export default Form;

