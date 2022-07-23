import React from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";
import {ReactComponent as Dogs} from "./../../assets/dogs.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to={'/'} aria-label={'Dogs - Home'}>
                    <Dogs/>
                </Link>
                <Link className={styles.login} to={'/login'}>Login / Registar</Link>
            </nav>
        </header>
    );
};

export default Header;