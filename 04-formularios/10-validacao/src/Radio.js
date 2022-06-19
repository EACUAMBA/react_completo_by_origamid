import React from 'react';


const Radio = ({radios, value, setValue, ...rest}) => {
    return (
        <>
            {
                radios.map((radio) => {
                    return (

                            <label key={radio}>
                                {radio}
                                <input type={'radio'} value={radio} checked={value === radio} onChange={({target}) => setValue(target.value)} {...rest}/>
                            </label>
                    );
                })
            }
        </>
    );
};

export default Radio;
