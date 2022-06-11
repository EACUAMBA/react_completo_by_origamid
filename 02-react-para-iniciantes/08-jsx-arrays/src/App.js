import React from 'react';

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const Cor = ({cor}) =>{
  return (
    <div id={cor} style={{backgroundColor: cor, padding: '4px', margin: '8px', color: '#ffffff'}}>
      {cor}
    </div>
  );
}

const Produto = ({id, nome, preco, cores}) => {
  //const {id, nome, preco, cores} = produto;
  return (
    <div>
      <h1>{nome}</h1>
      <p>Preço: <span>{preco}</span></p>
      <div>
        {cores.map((cor) => <Cor key={cor} cor={cor}/>)}
      </div>
    </div>
  );
}

const App = () => {
  const dados = produtos.filter(({preco}) => Number(preco.replace(/(\w\$)/gi, '')) > 1500);
  return (
    <section>
        {/* {produtos.filter(({preco}) => Number(preco.replace(/(\w\$)/gi, '')) > 1500).map((produto) => <Produto key={produto.id} produto={produto}/>)} */}
        {dados.map((produto) => <Produto key={produto.id} {...produto} />)}
    </section>
  );
};


export default App;
