import React from 'react';

const Checkbox = ({checkboxes, value, setValue}) => {

    function handleChange({target}){
        if(target.checked){
            setValue([...value, target.value])
        }else{
            setValue(value.filter((v)=> v !== target.value))
        }
    }

    return (
        <>
            {
                checkboxes.map((checkbox)=>{
                    return (
                        <label key={checkbox}>
                            {checkbox}
                            <input type={'checkbox'} value={checkbox} onChange={handleChange} checked={value.includes(checkbox)} />
                        </label>
                    );
                })
            }
        </>
    );
}
export default Checkbox;
