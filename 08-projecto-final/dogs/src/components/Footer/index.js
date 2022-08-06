import React from 'react';
import styles from './index.module.css';
import {ReactComponent as DogsFooter} from "./../../assets/dogs-footer.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <DogsFooter/>
            <p>Dogs. Alguns Direitos Reservados</p>
        </footer>
    );
};

export default Footer;
