import React from 'react';

const App = () => {
    // 1 - Usamos o useRef() para armazenar um referencia a um determinado elemento dentro do componente;
    // 2 - Essa referencia permanece memso após uma renderização do componente.
    // 3 - Podemos usar para guardar referencias de elementos como inputs, setTimeout e etc para posterior mente removermos.
    // 4 - Sempre devemos falar com o ref.currente ele vai nos retornar a referencia.

    const [items, setItems] = React.useState(0);
    const [produto, setProduto] = React.useState('');
    const [produtos, setProdutos] = React.useState([]);
    const notificacao = React.useRef();
    const timeout = React.useRef();
    const inputRef = React.useRef();

    function handleAdicionarNoCarrinho(event){
        setItems((item) => ++item)
        setProdutos([...produtos, produto]);

        inputRef.current.focus();

        clearTimeout(timeout.current);
        notificacao.current.style.display = 'flex';
        timeout.current = setTimeout(()=>{
            notificacao.current.style.display = 'none';
        }, 2000);

    }


    return (
        <>


            <div>
                <input ref={inputRef} value={produto} onChange={({target}) => setProduto(target.value)}/>
                <br/>
                <button onClick={handleAdicionarNoCarrinho}>Adicionar no carrinho</button>
            </div>
            <br/>
            <div ref={notificacao} style={{display: 'none', flexDirection: 'column', width: '100%', minHeight: '100px', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#D8315B', color: '#FFFAFF'}}>
                <span>Notificação</span>
                <div>Já tens {items} no carrinho.</div>
                <ul>
                    {produtos.map((item, index)=> <li key={index}>{item}</li>)}
                </ul>
            </div>
        </>
    );
};


export default App;
