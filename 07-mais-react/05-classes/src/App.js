import React from 'react';
import './App.css';
import Exemplo from "./components/Exemplo";

function reducer (state){
    return !state;
}

function App() {
    const [state, dispatch] = React.useReducer(reducer, false);

    return (
        <>
            {
                state &&  <Exemplo nome={'Edilson'}/>
            }
            <br/>
            <br/>
            <button onClick={()=> dispatch()}>Montar/Desmontar</button>
        </>
    );
}

export default App;
