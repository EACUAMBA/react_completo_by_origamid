import React from 'react';
import Input from './Input';
import useForm from './hooks/useForm';

const App = () => {

    const email = useForm('email');
    const cep = useForm('cep');
    const nome = useForm();
    const sobrenome = useForm(false);

    function emailFormOnSubmitHandler(event) {
        event.preventDefault();
        if (cep.validate() && email.validate() && nome.validate()) {
            console.log('Cep enviado!')
        } else {
            console.log('Cep não enviado!')
        }
    }

    return (
        <>
            <form onSubmit={emailFormOnSubmitHandler}>
                <Input
                    id={'email'}
                    name={'email'}
                    label={'Email'}
                    placeholder={'Email'}
                    type={'text'}
                    onBlur={email.onBlur}
                    onChange={email.onChange}
                    value={email.value}
                    error={email.error}
                />
                <br/>
                <Input
                    id={'cep'}
                    name={'cep'}
                    label={'CEP'}
                    placeholder={'CEP'}
                    type={'text'}
                    onBlur={cep.onBlur}
                    onChange={cep.onChange}
                    value={cep.value}
                    error={cep.error}
                />
                <br/>
                <Input
                    id={'nome'}
                    name={'nome'}
                    label={'Nome'}
                    placeholder={'Nome'}
                    type={'text'}
                    onBlur={nome.onBlur}
                    onChange={nome.onChange}
                    value={nome.value}
                    error={nome.error}
                />
                <br/>
                <Input
                    id={'sobrenome'}
                    name={'sobrenome'}
                    label={'Sobrenome'}
                    placeholder={'Sobrenome'}
                    type={'text'}
                    onBlur={sobrenome.onBlur}
                    onChange={sobrenome.onChange}
                    value={sobrenome.value}
                    error={sobrenome.error}
                />
                <br/>
                <button type={'submit'}>enviar</button>
            </form>
        </>
    );
};

export default App;
