import React from 'react';
import './App.css';
import './Title';
import Title from "./Title";

const App = () => {
    // 1 - Podemos utilizar o module.css para garantir que o nosso css não vai sobre escrever outro css de outro componente.
    // 2 - outro componente terá o css com classes concatenado com um conjunto de caracteres que torna ele único no projecto.
    // 3 - Devemos chamar o css como se fosse uma variavel normal.


        return (
            <>
                <div>
                    <Title>Ola mundo do React</Title>
                    Edilson Alexandre Cuamba - Aprende REACT com css module
                    <h1>Este devia ser preto e não branco, deu conflito!</h1>
                </div>
            </>
        );
}
    export default App;
