import React from 'react';
import {GlobalStorage} from "./GlobalContext";
import TelaInicial from './TelaInicial';

const App = () => {
    // 1 - usamos para crira um contexto onde teremos um valor que vamos compartilhar com todos os componentes.
    // 2 - usamos para evitar a passagem de estado entre compoenete e compoennte usando props.


     return (
        <GlobalStorage>
            <div style={{display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center'}}>
                <TelaInicial/>
            </div>
        </GlobalStorage>
    );
};


export default App;
