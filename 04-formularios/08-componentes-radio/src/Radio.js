import React from 'react';


const Select = ({options, value, setValue, ...rest}) => {
    return (
        <>
            <select value={value} onChange={({target})=>setValue(target.value)} {...rest}>
                <option disabled value={''}>Selecione...</option>
                {options.map((option)=> <option value={option}>{option}</option>)}
            </select>
        </>
    );
};

export default Select;
