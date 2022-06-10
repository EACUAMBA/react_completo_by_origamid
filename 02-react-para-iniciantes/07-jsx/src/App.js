// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  if (mario) {
  }
  const dados = luana;

  const activa = { color: 'green' }
  const inactiva = { color: 'red' }
  const message = (<p><span style={inactiva}>Você está gastando muito.</span></p>);
  const totalGasto = dados.compras
    .map((compra) => +compra.preco.replace(/(\w\$\s)*/gi, ''))
    .reduce((current, previous) => {
      previous += current;
      return previous;
    });
  const totalGastoFormatado = totalGasto.toLocaleString('pt-MZ', { currency: 'MZN', style: 'currency' });
  return (
    <div>
      <p><span>Nome: </span><span>{dados.cliente}</span></p>
      <p><span>Idade: </span><span>{dados.idade}</span></p>
      {/* <p><span>Situação: </span><span style={dados.ativa ? activa : inactiva}>{dados.ativa ? 'Activa' : 'Inactiva'}</span></p> */}
      <p><span>Situação: </span><span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Activa' : 'Inactiva'}</span></p>
      <p><span>Total gasto: </span><span>{totalGastoFormatado}</span></p>
      {/* {totalGasto >= 10000 ? message : null} */}
      {totalGasto >= 10000 && <p>Você está gastando muito.</p>}
    </div>
  );
};



export default App;
