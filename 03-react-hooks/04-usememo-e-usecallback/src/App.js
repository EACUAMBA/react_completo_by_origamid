import React from 'react';

function operacaoDemorada(){
    let resultado;
    for(let i = 0; i < 1000; i++){
        for(let j = 0; j < 100000; j++){
            resultado = Math.sqrt((i + j / 10 * 30));
        }
    }
    return resultado;
}

const func = new Set();

const App = () => {
    // 1 - Usamos para armazenar valores permanente que fizarão sempre na variavel mesmo depois do componente for renderizado, ess
    // 2 - Usamos o useMemo(callback, [dependendias]), executa so uma vez somnete quando a dependencia muda ou quando o componente inicia, apos isso ele não executa mais.
    // 3 - Usamos ele para realizar um processo assim que o compoennte ser renderizado pela 1 vez, usa-se mais quando queremos realizar uma tarefa muito lenta antes de renderizar a aplização.
    const [resultado, setResultado] = React.useState(0);
    const calculo = React.useMemo(()=>{
        setResultado(operacaoDemorada());
    }, [])
    const [idade, setIdade] = React.useState(0);

    const handleClick = React.useCallback((event)=> {
        console.log(event)
        setIdade((ida) => ++ida);
    })

    func.add(handleClick);
    console.log("Já temos ", func, "funcoes.")
    //useCallback
    // 1 - Usamos para criar um função uma vez, por exemplo assim que o component inicia criamos a funcao que manipula o botao
    return (
        <>
            <input value={resultado}/>
            <br/>
            <button onClick={handleClick}>Eu vou renderizar a tela!</button>
            <p>Você tem {idade} anos de idade.</p>
        </>
    );
};


export default App;
