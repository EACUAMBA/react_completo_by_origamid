import React from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import useForm from "../../../hooks/useForm";
import {TOKEN_POST, USER_GET} from "../../../api";
import {UserContext} from "../../../UserContext";

const LoginForm = () => {
    const username = useForm();
    const password = useForm('password');
    const {userLogin, getUser} = React.useContext(UserContext);

    React.useEffect(()=>{
        const token = window.localStorage.getItem('token');
        if(token){
            getUser(token);
        }
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();

        userLogin(username.value, password.value)
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
