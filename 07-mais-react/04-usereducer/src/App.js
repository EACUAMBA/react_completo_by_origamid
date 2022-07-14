import React from 'react';
import './App.css';

function changeState(state, action) {
    switch (action){
        case "+":{
            return state + 1;
        }
        case "-":{
            return state - 1;
        }
        default:{
            throw new Error("Action não existe!")
        }
    }
}

function App() {
    const [state, dispatch] = React.useReducer(changeState, 0);

    return (
        <>
            <button onClick={()=>dispatch('+')}>+</button>
            <span style={{margin: '16px', fontWeight: 'bolder'}}>{state}</span>
            <button onClick={()=>dispatch('-')}>-</button>
        </>
    );
}

export default App;
