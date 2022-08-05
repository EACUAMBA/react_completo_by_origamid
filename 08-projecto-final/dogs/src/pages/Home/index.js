import React from 'react';
import styles from './index.module.css';
import Feed from "../Feed";
import Loading from "../../components/helper/Loading";

const Home = () => {
    return (
        <section className={`container mainContainer ${styles.home}`}>
            <Feed/>

        </section>
    );
};

export default Home;
