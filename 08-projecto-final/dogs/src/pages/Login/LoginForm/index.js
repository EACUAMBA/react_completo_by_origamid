import React from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import useForm from "../../../hooks/useForm";
import {TOKEN_POST, USER_GET} from "../../../api";

const LoginForm = () => {
    const username = useForm();
    const password = useForm('password');

    React.useEffect(()=>{
        const token = window.localStorage.getItem('token');
        if(token){
            getUser(token);
        }
    }, [])

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if(username.validate() && password.validate()){
           const {url, options} = TOKEN_POST({username: username.value, password: password.value})

           const response = await fetch(url, options);
           const json = await response.json();

           window.localStorage.setItem('token', json.token);
           getUser(json.token);
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
