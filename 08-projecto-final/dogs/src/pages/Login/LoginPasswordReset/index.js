import React from 'react';
import styles from './index.module.css';
import Input from "../../../components/forms/Input";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/forms/Button";
import useFetch from "../../../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import Error from "../../../components/helper/Error";
import {PASSWORD_RESET} from "../../../api";

const LoginPasswordReset = () => {
    const [key, setKey] = React.useState(null);
    const [login, setLogin] = React.useState(null);

    const {validate, ...password} = useForm('pass');
    const {error, request, data, loading} = useFetch();
    const navigate = useNavigate();

    React.useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        if(params.get('key')) setKey(params.get('key'))
        if(params.get('login')) setLogin(params.get('login'))
    }, [])

    async function handleClick(event) {
        event.preventDefault();
        if(!validate())return;
        const {url, options} = PASSWORD_RESET({
            key,
            login,
            password: password.value
        });

        const {response} = await request(url, options)

        if(response && response.ok){
            navigate('/login')
        }
    }
    return (
        <section className={`animeLeft ${styles.resetar}`}>
            <h1 className={`title`}>Redefinir senha</h1>
            <form onSubmit={handleClick}>
                <Input label={'Nova senha'} type={'text'} name={'senha'} {...password}/>
                <Button disabled={loading}>Redefinir</Button>
                <Error error={error}/>
            </form>
        </section>
    );
};

export default LoginPasswordReset;
