import React from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import useForm from "../../../hooks/useForm";

const LoginForm = () => {
    const username = useForm();
    const password = useForm('password');

    function handleSubmit(event) {
        event.preventDefault();

        if(username.validate() && password.validate()){
            fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username.value, password: password.value})
            })
                .then(value => value.json())
                .then(value => console.log(value));
        }
    }

    return (
        <section className={styles.login}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input type={'text'} name={'username'} label={'Utilizador'} {...username}/>
                <Input type={'password'} name={'password'} label={'Senha'} {...password}/>
                <Button >Entrar</Button>
            </form>
            <Link to={'/login/criar'}>Cadastro</Link>
        </section>
    );
};

export default LoginForm;
