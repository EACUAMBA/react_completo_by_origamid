import React from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";
import {ReactComponent as Dogs} from "./../../assets/dogs.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={'container'}>
                <Link to={'/'} aria-label={'Dogs - Home'}>
                    <Dogs/>
                </Link>
                <Link to={'/login'}>Login / Registar</Link>
            </nav>
        </header>
    );
};

export default Header;
