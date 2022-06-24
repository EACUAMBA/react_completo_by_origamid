import React from 'react';


const Input = ({ id, name, label, value, type, onBlur, placeholder, error, onChange}) => {
    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <input type={type} id={id} name={name}  value={value} onChange={onChange} placeholder={placeholder} onBlur={onBlur}/>
            {
                error && <small style={{color: 'red'}}>{error}</small>
            }
        </>
    );
};

export default Input;
