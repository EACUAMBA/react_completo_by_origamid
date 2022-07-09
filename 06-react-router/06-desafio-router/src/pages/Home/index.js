import React from 'react';
import './index.css';
import Header from "../../components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";
import Head from "../../components/Head";

const Home = () => {
    return (
        <main className={'container'}>
            <Head title={ 'Home | Produto'}/>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default Home;
