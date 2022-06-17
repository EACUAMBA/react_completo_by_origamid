import React from 'react';

const App = () => {
    // 1 - Usamos como um input normal, definimos o valua para definir o valor do textarea.

    const [text, setText] = React.useState();

    return (
        <>
            <form >
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label htmlFor={'nome'}>Nome:</label>
                    <textarea id={'nome'} name={'nome'} value={text} onChange={(event) => setText(event.target.value)}/>

                </div>
            </form>

            <div>
                <h1>{text}</h1>
            </div>
        </>
    );
};


export default App;
