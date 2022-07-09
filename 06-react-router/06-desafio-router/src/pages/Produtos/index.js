import React from 'react';
import './index.css'
import Produto from "../../components/Produto";
import Circle from "../../components/circle";
import Loading from "../../components/Loading";
import {Outlet} from "react-router-dom";
import {fetchProdutos} from "../../services/API";
import Head from "../../components/Head";

const Produtos = () => {
    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(() => {
        fetchProdutos(setProdutos)
    }, [produtos])

    if(produtos.length > 0){
        return (
            <section className={'produtos'}>
                <Head title={ 'Produtos | Produto'}/>
                {
                    produtos.map((item)=> {
                        return <span key={item.id}><Produto  produto={item} /></span>
                    })
                }
            </section>
        );
        <Outlet/>
    }else {
        return <Loading/>
    }
};

export default Produtos;
