import React from 'react';
import styles from './index.module.css';
import Feed from "../Feed";
import Loading from "../../components/helper/Loading";
import Head from "../../components/helper/Head";

const Home = () => {
    return (
        <section className={`container mainContainer ${styles.home}`}>
            <Head title={'Home'} description={'Site Dogs, sua rede para cachoros.'}/>
            <Feed/>
        </section>
    );
};

export default Home;
