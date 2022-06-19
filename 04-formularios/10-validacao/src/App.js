import React from 'react';
import Input from "./Input";

const App = () => {

    // 1 - O monento perfeito para fazermos isso é no momento onBlur, quando tiramos o focus do elemento HTML.
    // 2 -  Devemos validar nesse momento, e validar sempre que houver mudança se o utilizador já tiver erado.
    // 3 - Podemos e devemos validar no onSubmit para sabermos se o que o utilizador digitou está correcto ou não.

    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(null);

    //função validadora, responsavel por validar e settar mensagens de erro.
    //caso a validação esteja correcta, ele seta o estado do erro como null, e retorna verdade
    // Casa haja um erro verifico se é porque o campo está vazio, se estiver vázio, setto no estado erro a mensagme de erro de ausencia
    // Caso esteja prechido apresendo o erro e digo que o email está incorecto.
    function validaEmail(emailTemp) {
        const regexp = new RegExp('([a-zA-Z0-9-_]{3,})@([a-zA-Z0-9-_]{3,}).([a-zA-Z0-9-_.]){2,}([a-zA-Z0-9]{2,}$)', 'gi');
        const result = regexp.test(emailTemp);
        if (result) {
            setError(null);
            return true;
        } else if (emailTemp.length === 0) {
            setError('Insira um email!');
            return false
        } else {
            setError('Email incorrecto, insira um email válido!')
            return false;
        }
    }

    function emailOnChangeHandler(event) {
        const emailTemp = event.target.value;
        setEmail(emailTemp);
        if (error) {
            validaEmail(emailTemp);
        }
    }

    function emailOnBlurHandler(event) {
        const emailTemp = event.target.value;
        validaEmail(emailTemp)
    }

    function emailFormOnSubmitHandler(event) {
        event.preventDefault();
        if (validaEmail(email)) {
            console.log('Email enviado!')
        } else {
            console.log('Email não enviado!')

        }
    }

    return (
        <>
            <form onSubmit={emailFormOnSubmitHandler}>
                <Input
                    id={'email'}
                    name={'email'}
                    label={'Email'}
                    value={email}
                    onChange={emailOnChangeHandler}
                    onBlur={emailOnBlurHandler}
                />
                {
                    error && <small style={{color: 'red'}}>{error}</small>
                }
                <br/>
                <button type={'submit'}>enviar</button>
            </form>
        </>
    );
};


export default App;
