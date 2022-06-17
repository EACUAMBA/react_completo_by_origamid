import React from 'react';


const Input = ({ id, name, label, value, setValue, ...rest}) => {
    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <input type={'text'} id={id} name={name} {...rest} value={value} onChange={({target}) => setValue(target.value)}/>
        </>
    );
};

export default Input;
