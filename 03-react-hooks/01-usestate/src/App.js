import React from 'react';
import Produto from './Produto';
import Circle from "./circle";

const App = () => {
    // 1- no hook usestate temos dois valores, um para obter o valor e outro uma função para actualizar o valor do hook;
    //2- Reactividade a capacidade do react de reagir as mudanças de estado
    // 3 - Devemos sempre trabalhar com a função para termo a reactividade dos componente.
    // 4 - Podemos utilizar o call back para termo o valor anterior sem precisar de passaro valor anteriro, setNewState((valorAnterior)=> !valorAnterior)
    // 5 - O modo estrito serve para evitar efeitos colaterais, como um estado que ao acionado altera outro estado.
    // 6 -

    const [produto, setProduto] = React.useState(null);
    const [loading, setloading] = React.useState(false);

    async function handleClick(event) {
        setloading(true)
        setProduto(null)
        const apiResource = event.target.innerText;
        const produto = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${apiResource.toLowerCase()}`).then((response) => response.json())
        console.log(produto);
        setProduto((produto))
        setloading(false)
    }

    return (
        <>
            <div style={{display: 'flex', gap: '16px'}}>
                <button onClick={handleClick}>Tablet</button>
                <button onClick={handleClick}>Smartphone</button>
                <button onClick={handleClick}>Notebook</button>
            </div>
            <div style={{minHeight: '200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                {loading ? <Circle/> : null}
                <Produto produto={produto}/>
            </div>
        </>
    );
};


export default App;
