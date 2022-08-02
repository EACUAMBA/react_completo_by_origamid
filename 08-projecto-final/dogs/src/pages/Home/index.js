import React from 'react';
import styles from './index.module.css';
import Feed from "../Feed";

const Home = () => {
    return (
        <section className={`container mainContainer ${styles.home}`}>
            <Feed/>
        </section>
    );
};

export default Home;
