import React from 'react';

const App = () => {
    // 1 - Esta relacionado com o checked, o value é estatico não muda.

    const [selected, setSelected] = React.useState(false);
    const [cores, setCores] = React.useState(['azul']);

    function handleChange(event) {
        const target = event.target;

        console.log(target.value, target.checked);


        if (target.checked)
            setCores([...cores, target.value]);
        else
            setCores(cores.filter((cor) => cor !== target.value))

    }

    function isChecked(cor){
        return cores.includes(cor)
    }

    return (
        <>
            <form>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label>
                        <input type={'checkbox'} value={selected} onChange={({target}) => setSelected(target.checked)}/>
                        Termos do site
                    </label>

                </div>
            </form>

            <div>
                <h1>Confirmou?: {selected ? 'Confirmou o desgraçado' : 'Não confirmou, desgraça!'}</h1>
            </div>


            <form>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label>
                        <input type={'checkbox'} name={'cores'} value={'vermelho'} checked={isChecked('vermelho')} onChange={handleChange}/>
                        Vermelho
                    </label>

                    <label>
                        <input type={'checkbox'} name={'cores'} value={'azul'} checked={isChecked('azul')} onChange={handleChange}/>
                        Azul
                    </label>

                    <label>
                        <input type={'checkbox'} name={'cores'} value={'branco'} checked={isChecked('branco')}  onChange={handleChange}/>
                        Branco
                    </label>

                    <label>
                        <input type={'checkbox'} name={'cores'} value={'verde'} checked={isChecked('verde')} onChange={handleChange}/>
                        Verde
                    </label>

                </div>
            </form>

            <div>
                <h1>Cores: {cores.map((cor)=> <p>{cor}</p>)}</h1>
            </div>
        </>
    );
};


export default App;
