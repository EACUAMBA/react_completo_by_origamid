import React from 'react';
import './App.css';
import './Title';
import Title from "./Title";

const App = () => {
    // 1 - Para usar css no REACT devemos importar usando o ´´´import './path/to/file.css';´´´
    // 2 - Quando importamos um css ele vai sobre escrever o outro css que aplica na mesma classe, por isso, deve-se prestar atenção nos nomes das classe.

        return (
            <>
                <div>
                    <Title>Ola mundo do React</Title>
                    Edilson Alexandre Cuamba - Aprende REACT com css
                    <h1>Este devia ser preto e não branco, deu conflito!</h1>
                </div>
            </>
        );
}
    export default App;
