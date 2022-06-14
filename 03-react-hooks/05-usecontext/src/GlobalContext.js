import React from 'react';

export const GlobalContext = React.createContext();

export function GlobalStorage ({children}){

    const [produtos, setProdutos] = React.useState(null);
    React.useEffect(()=>{
        fetch('https://ranekapi.origamid.dev/json/api/produto').then((response) => response.json()).then((json)=> setProdutos(json));
        fetch('https://ranekapi.origamid.dev/json/api/produto').then((response) => response.text()).then((body)=> JSON.parse(body)).then((teste) => console.log(teste));
    }, [])

    function limparDados(){
        setProdutos(null);
    }

    return (
        <GlobalContext.Provider value={{produtos, limparDados}}>
            {children}
        </GlobalContext.Provider>
    );
}
