import React from 'react';

const types = {
    email: {
        regex: new RegExp(/([a-zA-Z0-9-_]{3,})@([a-zA-Z0-9-_]{3,}).([a-zA-Z0-9-_.]){2,}([a-zA-Z0-9]{2,}$)/, 'i'),
        message: 'Email inválido',
    },

    cep: {
        regex: new RegExp(/^\d{5}-?\d{3}$/, 'i'),
        message: 'Cep inválido',
    }
};


function UseForm(type) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate() {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Insira um valor!');
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null)
            return true;
        }
    }

    function onChange(event) {
        const valueTemp = event.target.value;
        setValue(valueTemp);
        if (error) {
            validate(valueTemp);
        }
    }

    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => validate(value),
        validate
    }
}

export default UseForm;
