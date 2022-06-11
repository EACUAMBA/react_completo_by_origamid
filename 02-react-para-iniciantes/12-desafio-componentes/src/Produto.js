import React from 'react';

const Produto = ({produto}) =>{
  return (
    <>
      <div style={{border: '1px solid black', margin: '16px', padding: '16px'}}>
        <h2>{produto.nome}</h2>
        <ul>
          {produto.propriedades.map((propriedade, index) => <li key={index}>{propriedade}</li>)}
        </ul>
      </div>
    </>
  );
}

export default Produto;