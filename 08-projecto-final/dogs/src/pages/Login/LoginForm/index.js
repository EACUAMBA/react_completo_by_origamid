import React from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
            .then(value => value.json())
            .then(value => console.log(value))
    }

    return (
        <section className={styles.login}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={({target}) => setUsername(target.value)} />
                <input type="text" value={password} onChange={({target}) => setPassword(target.value)} />
            <button>Entrar</button>
            </form>
            <Link to={'/login/criar'}>Cadastro</Link>
        </section>
    );
};

export default LoginForm;
