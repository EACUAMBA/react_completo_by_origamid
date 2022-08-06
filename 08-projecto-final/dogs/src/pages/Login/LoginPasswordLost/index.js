import React from 'react';
import styles from './index.module.css';
import Input from "../../../components/forms/Input";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/forms/Button";
import useFetch from "../../../hooks/useFetch";
import {PASSWORD_LOST} from "../../../api";
import Error from "../../../components/helper/Error";

const LoginPasswordLost = () => {

    const {validate, ...login} = useForm('login');
    const {error, loading, data, request} = useFetch();
    // const [mailSent, setMailSent] = React.useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        if(!validate()) return;
        const {url, options} = PASSWORD_LOST({
            'login': login.value,
            'url': window.location.href.replace('perdeu', 'resetar')
        });

        const {response} = await request(url, options);
        if(response && response.ok){
            // setMailSent(true)
        }
    }

    return (
        <section className={styles.login}>
            <h1 className={`title`}>
                Perdeste a senha?
            </h1>

            {
                data
                    ?
                    <p className={`${styles.mailSent}`}>Email de recuperação enviado com sucesso!</p>
                    :
                    <form onSubmit={handleSubmit}>
                        <Input name={'login'} label={'Email ou nome de utilizador'} type={`text`} {...login}/>
                        <Button disabled={loading}>Recuperar</Button>
                        <Error error={error}/>
                    </form>
            }
        </section>
    );
};

export default LoginPasswordLost;
