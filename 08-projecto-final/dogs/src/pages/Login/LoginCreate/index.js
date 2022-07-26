import React from 'react';
import styles from './index.module.css';
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import useForm from "../../../hooks/useForm";
import {USER_POST} from "../../../api";
import {UserContext} from "../../../UserContext";
import useFetch from "../../../hooks/useFetch";
import Error from "../../../components/helper/Error";

const LoginCreate = () => {
    const username = useForm();
    const password = useForm();
    const email = useForm('email');
    const {userLogin} = React.useContext(UserContext);

    const {loading, error, request} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        const {url, options} = USER_POST({
            username: username.value,
            password: password.value,
            email: email.value,
        });
        const {response, json} = await request(url, options);
        if(response.ok){
            userLogin(username.value, password.value)
        }
    }
    return (
        <section className={'animeLeft'}>
            <h1 className={'title'}>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label={'Utilizador'} type={'text'} name={'username'} {...username}/>
                <Input label={'Email'} type={'text'} name={'email'} {...email}/>
                <Input label={'Senha'} type={'password'} name={'password'} {...password}/>
                <Button disabled={loading}>Cadastrar</Button>
                <Error error={error}/>
            </form>
        </section>
    );
};

export default LoginCreate;
