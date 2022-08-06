import React from 'react';
import styles from './index.module.css'
import {useLocation} from "react-router-dom";

const NotFound404 = ({photo}) => {
    const [pagina, setPagina] = React.useState(null);
    const location = useLocation();

    React.useEffect(()=>{
        setPagina(location.pathname)
    }, [location])

    return (
        <>
            <section className={`container mainContainer`}>
                <h1 className={`title`}>Erro: 404</h1>
                <p className={`${styles.info}`}>A página "<b>{pagina}</b>" não existe.</p>
            </section>
        </>

    );
};

export default NotFound404;
