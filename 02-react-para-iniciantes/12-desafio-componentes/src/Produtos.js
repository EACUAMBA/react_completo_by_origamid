import React from 'react';
import PageTitle from './PageTitle';
import Produto from './Produto';

const Produtos = ({produtos}) => {
  
  return (
    <>
    <PageTitle>Produtos</PageTitle>
    <div>
      {produtos.map((produto) => <Produto key={produto.nome} produto={produto}/>)}
    </div>
    </>
  );
}

export default Produtos;