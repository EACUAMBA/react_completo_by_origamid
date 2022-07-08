import React from 'react';
import {NavLink} from "react-router-dom";
import Head from "./Head";

function Home() {
    return (
        <>
            <Head title={'Home'} description={'Descrição da home.'}/>
            <div>
                <h1>Home do site.</h1>
                <div style={{display: 'flex', gap: '16px'}}>
                    <NavLink to={'produto/computador'}>Computadores</NavLink>
                    <NavLink to={'produto/smartphone'}>Smartphones</NavLink>
                </div>
            </div>
        </>
    );
}

export default Home;
