import React from 'react';
import {NavLink} from "react-router-dom";
import './index.css';

const Header = () => {
    return (
        <header>
            <nav className={'menu'}>
                <NavLink to={'/'} className={'btn'}>Produtos</NavLink>
                <NavLink to={'contacto'} className={'btn'}>Contacto</NavLink>
            </nav>
        </header>

    );
};

export default Header;
