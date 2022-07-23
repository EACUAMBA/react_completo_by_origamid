import React from 'react';
import styles from './index.module.css';
import Input from "../../../components/forms/Input";

const LoginCreate = () => {
    return (
        <div className={styles.login}>
            <h1>Login Create</h1>
            <Input/>
        </div>
    );
};

export default LoginCreate;
