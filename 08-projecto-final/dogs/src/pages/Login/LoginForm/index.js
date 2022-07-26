import React from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import useForm from "../../../hooks/useForm";
import {UserContext} from "../../../UserContext";
import Error from "../../../components/helper/Error";
import stylesButton from "./../../../components/forms/Button/index.module.css"

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const {userLogin, getUser, error, loading} = React.useContext(UserContext);

    React.useEffect(()=>{
        const token = window.localStorage.getItem('token');
        if(token){
            getUser(token);
        }
    }, [getUser])

    async function handleSubmit(event) {
        event.preventDefault();

        userLogin(username.value, password.value)
    }

    return (
        <section className={`${styles.login} animeLeft`}>
            <h1 className={'title'}>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type={'text'} name={'username'} label={'Utilizador'} {...username}/>
                <Input type={'password'} name={'password'} label={'Senha'} {...password}/>
                <Button disabled={loading}>Entrar</Button>
                <Error error={error}/>
            </form>
            <Link className={styles.perdeu} to={'/login/perdeu'}>Perdeu a senha?</Link>

            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesButton.button} to={'/login/criar'}>Cadastro</Link>
            </div>
        </section>
    );
};

export default LoginForm;
