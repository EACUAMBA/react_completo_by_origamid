import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

const Produto = ({produto}) => {
    return (
        <Link to={'produtos/' + produto.id} >
            <article className={'item-produto'}>
                <img src={produto.fotos[0].src} className={'img'} alt={produto.fotos[0].titulo}/>
                <h2>{ produto.nome }</h2>
            </article>
        </Link>
    );
};

export default Produto;
