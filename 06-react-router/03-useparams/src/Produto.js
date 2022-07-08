import React from 'react';
import {useLocation, useParams} from "react-router-dom";

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
        </div>
    );
};

export default Produto;