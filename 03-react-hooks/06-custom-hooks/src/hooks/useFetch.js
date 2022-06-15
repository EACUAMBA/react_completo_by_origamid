import React from 'react';

const useFetch = () =>{
    const [data, setData] = React.useState();
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState();

    //Função para request, determinamos quando vai acontecer.
    //Usamos aqui o useCallback para ele criar apenas uma função request. mesmo após renderizar a tela.
    const request = React.useCallback(
        async (url, options) => {
            setError(null)
            setLoading(true);
            let response, json;
            try {
                response = await fetch(url, options);
                json = await response.json();

            }catch (error){
                setError(error)
                json= null;
            }finally {
                setData(json);
                setLoading(false);
                return {response, json};
            }
        },
        []
    );


    return {data, error, loading, request};
}

export default useFetch;
