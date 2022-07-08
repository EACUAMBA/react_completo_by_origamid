import React from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

const Produto = () => {
    // Usado para pegar os parametros que definimos na URL;
    const params = useParams();
    //Usado para retornar dados da url;
    const location = useLocation();

    return (
        <div>
            <h1>Produtos</h1>
            <div>Você esta ná página de produtos: <b>{ params.id }</b></div>
            <div>Você está no location: <b>{location.pathname}</b></div>
            <Outlet/>
            <div style={{display: 'flex', gap: '16px', margin: '16px'}}>
                <Link to={''}>Descricao de { params.id }</Link>
                <Link to={'customizado'}>Customizacoes de { params.id }</Link>
                <Link to={'avaliacoes'}>Avaliacoes de { params.id }</Link>
            </div>
        </div>
    );
};

export default Produto;