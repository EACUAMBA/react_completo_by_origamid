import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

function Header(){
    return (
        <nav style={{display: 'flex', gap: '16px', background: '#ad697e', marginBottom: '32px'}} >
            <NavLink className={'nav-item'} to={'/'} end>Home</NavLink>
            {' | '}
            <NavLink className={'nav-item'} to={'sobre'}>Sobre</NavLink>
            {' | '}
            <NavLink className={'nav-item'} to={'login'}>Login</NavLink>
        </nav>
    );
}

export default Header;
