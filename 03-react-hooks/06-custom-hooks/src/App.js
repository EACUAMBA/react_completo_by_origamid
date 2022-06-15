import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useFetch from './hooks/useFetch';
import Circle from "./circle";
import WarningSign from "./warning-sign";

const App = () => {

    const [produto, setProduto] = useLocalStorage('produto', '');
    const {request, data, loading, error} = useFetch();

    function handleClick({target}){
        setProduto(target.innerText);
    }

    React.useEffect(()=>{
        async function fetchData(){
            const {response, json} = await request('https://servicodados.ibge.gov.br/api/v1/produtos');
            console.log(response, json)
        }
        fetchData();

        }, [request])

    console.log(data)


    if(error) return  <div><WarningSign/><br/>Error: {error.toString()}</div>
    if(loading) return <div><Circle/></div>
    return (
        <>
            Criando meus proprios Hooks
            <button onClick={handleClick}>Notebook</button>
            <br/>
            <br/>
            <button onClick={handleClick}>Smartphone</button>

            {
                data && data.map((produto) => <div key={produto.id}><h1>{produto.titulo}</h1></div>)
            }
        </>
    );
};


export default App;
