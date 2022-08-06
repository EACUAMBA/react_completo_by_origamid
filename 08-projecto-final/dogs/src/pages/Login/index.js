import React from 'react';
import styles from './index.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import {UserContext} from "../../UserContext";
import NotFound404 from "../../components/NotFound404";
import Head from "../../components/helper/Head";


const Login = () => {

    const {login} = React.useContext(UserContext);
    if (login) {
        return <Navigate to={'/conta'}/>
    }

    return (
        <>
            <Head title={'Login'} description={'Site Dogs, sua rede para cachoros.'}/>
            <section className={styles.login}>
                <div className={styles.forms}>
                    <Routes>
                        <Route path={'/'} element={<LoginForm/>}/>
                        <Route path={'/criar'} element={<LoginCreate/>}/>
                        <Route path={'/perdeu'} element={<LoginPasswordLost/>}/>
                        <Route path={'/resetar'} element={<LoginPasswordReset/>}/>
                        <Route path={'*'} element={<NotFound404/>}/>
                    </Routes>
                </div>
            </section>
        </>
    );
};

export default Login;
