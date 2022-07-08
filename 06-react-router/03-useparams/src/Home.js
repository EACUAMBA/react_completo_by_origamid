import React from 'react';
import {NavLink} from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Home do site.</h1>
            <div style={{display: 'flex', gap: '16px'}}>
                <NavLink to={'produto/computador'}>Computadores</NavLink>
                <NavLink to={'produto/smartphone'}>Smartphones</NavLink>
            </div>
        </div>
    );
}

export default Home;
