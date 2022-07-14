import React from 'react';
import './App.css';
// import HeavyComponent from './components/HeavyComponent';
const HeavyComponent = React.lazy(() => import('./components/HeavyComponent'));

//Usamos o lazy e suspense para carregar um componente de forma tardia e e renderizar somente se o cliente precisar.

function App() {
    const [show, setShow] = React.useState();

    return (
        <>
            {
                show && <React.Suspense fallback={<div>Carregando</div>}>
                    <HeavyComponent/>
                </React.Suspense>
            }

            <button onClick={() => setShow((old) => !old)}>Ver</button>
        </>
    );
}

export default App;
