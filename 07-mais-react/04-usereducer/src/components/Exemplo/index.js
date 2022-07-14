import React from 'react';
import Select from '@mui/material/Select';
import {FormControl, MenuItem} from "@mui/material";

const reducer = (state, action) => {
    switch (action.target) {
        case "adicionar": {
            return [...state, action.payload];
        }
        case "remover": {
            return state.filter((item) => item !== action.payload)
        }
        default: {
            throw new Error("target desconhecido.")
        }
    }
}

const Exemplo = () => {

    const [state, dispatch] = React.useReducer(reducer, ["Terra", "Lua", "Saturno"])
    const [planeta, setPlaneta] = React.useState("");

    function handleAdicionar(event) {
        if (!planeta) {
            alert("Escreva algum planeta")
        }
        dispatch({target: 'adicionar', payload: planeta})
    }

    function handleRemover(event) {
        if (!planeta) {
            alert("Escreva algum planeta")
        }
        dispatch({target: 'remover', payload: planeta})
        setPlaneta("");
    }


    return (
        <div>
            <input type={'text'} value={planeta} onChange={(event) => setPlaneta(event.target.value)}/>
            <br/>
            <button onClick={handleAdicionar}>Adicionar</button>
            <hr/>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={planeta}
                    label="Planeta"
                    onChange={(event) => setPlaneta(event.target.value)}
                >
                    {
                        state.map((item) => {
                            return <MenuItem value={item} key={item}>{item}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <br/>
            <br/>
            <button onClick={handleRemover}>Remover</button>
            <br/>
        </div>
    );
};

export default Exemplo;