import React from 'react';

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha com um email válido.'
    },
    password: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: 'Senha fraca de mais, a senha deve ter pelo menos 1 número, 1 letra minuscule, 1 letra maiúscula, e 8 caracteres..'
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function onChange({target}) {
        if(error) validate(target.value)
        setValue(target.value);
    }

    function validate(value) {
        if (!type) return true;
        if (value.length === 0) {
            setError('Preencha um valor.');
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false;
        } else{
            setError(null);
            return true;
        }
    }

    return {value, onChange, error, validate: () => validate(value), onBlur: () => validate(value)};
}

export default useForm;
