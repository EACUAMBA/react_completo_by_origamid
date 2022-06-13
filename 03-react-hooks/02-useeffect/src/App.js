import React from 'react';
import Produto from "./Produto";
import Circle from "./circle";

const App = () => {
    // 1 - Usamoso useEffect para executar uma função de callback cada vez que o elemento for renderizado
    // 2 - Podemos passar um array de dependedencias e o useEffect so executará uma vez
    // 3 - Devemos sempre, é obrigatorio, passar dependencias ao useEffect
    // 4 - Temos qeu definir um array seja vázion ou com dependendcias de dependencias, que serão usadas para saber se deve-se executar o callback de novo ou não o effect.
    // Adicionamos eventos no window ou documento usando o effect, para não adicionar varios eventos no memso elemento.
    // 7 - Para executarmos uma accao quando o componente é removido da tela usamos uma callback no retorno da funcao de callback do useEffect

    const [apiResource, setApiResource] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const produtoResource = window.localStorage.getItem('produto');
        if (produtoResource)
            setApiResource(produtoResource)
    }, [])

    function handleClick(event) {
        const target = event.target;
        const apiResource = target.dataset['produto'];
        setApiResource(apiResource);
    }

    return (
        <>
            <div style={{display: 'flex', width: '100%', gap: '16px'}}>
                <button onClick={handleClick} data-produto={'notebook'}>Notebook</button>
                <button onClick={handleClick} data-produto={'smartphone'}>Smartphone</button>
            </div>

            <div style={{
                display: 'flex',
                width: '100%',
                gap: '16px',
                minHeight: '200px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {loading ? <Circle/> : null}
                <Produto apiResource={apiResource} setLoading={setLoading}/>
            </div>

        </>
    );
};


export default App;
