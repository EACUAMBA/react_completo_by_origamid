import React from 'react';
import styles from './index.module.css';
import UserHeaderNav from "../UserHeaderNav";
import {useLocation} from "react-router-dom";

const UserHeader = () => {
    const [title, setTitle] = React.useState('Sem title');
    const location = useLocation();

    React.useEffect(()=>{
        const {pathname} = location;
        switch (location.pathname){
            case '/conta/estatisticas':{
                setTitle('Estatísticas')
                break;
            }
            case '/conta':{
                setTitle('Conta');
                break;
            }
            case '/conta/postar':{
                setTitle('Poste Sua Foto')
                break;
            }
        }
    }, [location])
    return (
        <header className={styles.header}>
            <h1 className={'title'}>{title}</h1>
            <UserHeaderNav/>
        </header>
    );
};

export default UserHeader;
