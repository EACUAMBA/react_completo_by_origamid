import React from 'react';

const App = () => {
    // 1 - Usamos o select com o value da option que a pessoa selecionar.
    // 2 - Podemos obrigar a pessoa a selecionar por deixar uma oprion disable sem conteudo no value

    const [selected, setSelected] = React.useState('');

    return (
        <>
            <form >
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label htmlFor={'nome'}>Nome:</label>
                    <select value={selected} onChange={({target})=> setSelected(target.value)}>
                        <option disabled value={''}>Seleccione um campo!</option>
                        <option value={'solteiro'}>Solteiro</option>
                        <option value={'casado'}>Casado</option>
                        <option value={'divorciado'}>Divorciado</option>
                        <option value={'viuvo'}>Viuvo</option>
                    </select>
                </div>
            </form>

            <div>
                <h1>Seleccionaste: {selected}</h1>
            </div>
        </>
    );
};


export default App;
