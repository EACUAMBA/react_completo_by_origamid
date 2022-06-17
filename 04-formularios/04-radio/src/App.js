import React from 'react';

const App = () => {
    // 1 - Para usar devemos colocar o name no imput que queremos que seja selecionave e outro não
    // podemos usar o chacked tambem.

    const [selected, setSelected] = React.useState('');
    const [checked, setChecked] = React.useState('');

    return (
        <>
            <form >
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label >
                        Masculino
                        <input type={'radio'} value={'m'} checked={selected === 'm'} onChange={({target})=>setSelected(target.value)}/>
                    </label>

                    <label >
                        Feminino
                        <input type={'radio'} value={'f'} checked={selected === 'f'} onChange={({target})=>setSelected(target.value)}/>
                    </label>
                </div>
            </form>

            <div>
                <h1>Seleccionaste: {selected}</h1>
            </div>


            <form >
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label >
                        PHP
                        <input type={'radio'} name={'linguagem'} value={'php'} onChange={({target})=>setChecked(target.value)}/>
                    </label>

                    <label >
                        Java
                        <input type={'radio'} name={'linguagem'} value={'java'} onChange={({target})=>setChecked(target.value)}/>
                    </label>

                    <label >
                        JavaScript (EcmaScript)
                        <input type={'radio'} name={'linguagem'} value={'ecmascript'} onChange={({target})=>setChecked(target.value)}/>
                    </label>
                </div>
            </form>

            <div>
                <h1>Seleccionaste: {checked}</h1>
            </div>
        </>
    );
};


export default App;
