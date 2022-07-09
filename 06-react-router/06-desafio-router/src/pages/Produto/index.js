import React from 'react';
import {useParams} from "react-router-dom";
import {fetchProduto} from "../../services/API";
import Loading from "../../components/Loading";
import './index.css';
import Head from "../../components/Head";

const Produto = () => {
    const params = useParams();
    const [produto, setProduto] = React.useState(null);
    React.useEffect(()=>{
        fetchProduto(params.id).then((value => setProduto(value)));
    }, [])

    if(produto){
        return (
            <>
                <Head title={ produto.nome + ' | Produto'}/>
                <div className={'produto'}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                        {
                            produto.fotos.map((foto)=>{
                                return <img key={foto.src} className={'img'} src={foto.src} alt={foto.titulo}/>
                            })
                        }
                    </div>
                    <div className={'details'}>
                        <h2 className={'nome'}>{produto.nome}</h2>
                        <span className={'preco'}>{Number(produto.preco).toLocaleString('pt-MZ', {
                            currency: 'MZN',
                            style: 'currency'
                        })}</span>
                        <p>{produto.descricao}</p>
                    </div>
                </div>
            </>
        );
    }else {
        return <Loading/>
    }
};

export default Produto;
