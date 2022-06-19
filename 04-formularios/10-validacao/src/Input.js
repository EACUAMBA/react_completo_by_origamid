import React from 'react';


const Input = ({ id, name, label, value, onChange, ...rest}) => {
    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <input type={'text'} id={id} name={name} {...rest} value={value} onChange={onChange}/>
        </>
    );
};

export default Input;
