import React from 'react';

const Exercicio = () => {
// Optimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

    const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
    const [items, setItems] = React.useState(['azul']);


    return (
        <>
            <h1>Cores</h1>
            {coresArray.map((cor) => <span key={cor}><Checkbox value={cor} name={cor} label={cor} items={items}
                                                               setItems={setItems}/></span>)}

            <table>
                <thead>
                <tr>
                    <th>
                        Cor
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, index) => <tr key={index}>
                        <td>{item}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </>
    );
}
export default Exercicio;

function Checkbox({value, name, label, items, setItems}) {

    //Verificando se o checkbox foi selecionado, se foi adiciono no estado como seleccionado, se não adiciono no estados todos menos ele.
    function handleClick({target}) {
        if (target.checked)
            setItems(Array.from(new Set([...items, target.value])));
        else{
            setItems(items.filter((item)=> item !== target.value));
        }
    }

    //Verificando se o item exite no array do estado da lista de comboboxes, se existir devemos retornar true.
    function isChecked(item) {
        return items.includes(item);
    }

    return (
        <>
            <fieldset>
                <label style={{textTransform: 'capitalize'}}>
                    {label}
                    <input type={'checkbox'} value={value} name={name} checked={isChecked(value)} onChange={handleClick}/>
                </label>
            </fieldset>
        </>
    );
}
