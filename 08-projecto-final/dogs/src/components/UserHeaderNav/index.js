import React from 'react';
import styles from './index.module.css';
import {NavLink, useLocation} from "react-router-dom";
import {UserContext} from "../../UserContext";
import {ReactComponent as MinhasFotos} from "./../../assets/feed.svg";
import {ReactComponent as Estatisticas} from "./../../assets/estatisticas.svg";
import {ReactComponent as AdicionarFoto} from "./../../assets/adicionar.svg";
import {ReactComponent as Sair} from "./../../assets/sair.svg";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
    // 40 * 16px = 640px
    const [match] = useMedia('(max-width: 40rem)')
    const {userLogout} = React.useContext(UserContext);
    const mobile = match;
    const [menuOpen, setMenuOpen] = React.useState(false);

    const {pathname} = useLocation();
    React.useEffect(()=>{
        setMenuOpen(false);
    }, [pathname])

    return (
        <>
            {
                mobile &&
                <button className={`${styles.mobileButton} ${menuOpen && styles.mobileButtonActive}`} onClick={()=> setMenuOpen((menuOpen)=>!menuOpen)}>

                </button>
            }

            <nav className={`${mobile ? styles.navMobile : styles.nav} ${menuOpen && styles.navMobileActive}`}>
                <NavLink to={'/conta'} end>
                    <MinhasFotos/>
                    {mobile && 'Minhas Fotos'}
                </NavLink>
                <NavLink to={'/conta/estatisticas'}>
                    <Estatisticas/>
                    {mobile && 'Estatisticas'}
                </NavLink>
                <NavLink to={'/conta/postar'}>
                    <AdicionarFoto/>
                    {mobile && 'Adicionar Fotos'}
                </NavLink>
                <button onClick={() => userLogout()}>
                    <Sair/>
                    {mobile && 'Sair'}</button>
            </nav>
        </>
    );
};

export default UserHeaderNav;
