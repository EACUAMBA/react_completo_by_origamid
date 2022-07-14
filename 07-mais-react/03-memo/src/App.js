import React from 'react';
import './App.css';
import HeavyComponent from './components/HeavyComponent';

function App() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>{count}</h1>
            <HeavyComponent/>

            <button onClick={() => setCount(1 + count)}>Ver</button>
        </>
    );
}

export default App;
