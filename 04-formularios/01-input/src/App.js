import React from 'react';

const App = () => {
    // 1 - Definir um estado hook useState
    // 2 - devemos definir o value do input como o valor do estado e definir o setValue do estado no handler ou callback da onChange
    // 3 - Devemos prevenir o padrão do formulário que envia ao clicar o submit.
    // 4 - Podemos definir o estado para cada campo do formulário.
    // 5 - Podemos criar um objecto para o estado, devemos desestruturar os valores antigos e passarmos os novos;

    const [newsletterForm, setNewsletterForm] = React.useState({
        nome: '',
        email: '',
    });

    function handleInputChange({target}){
        const {name, value} = target;
        setNewsletterForm({...newsletterForm, [name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(newsletterForm.nome, newsletterForm.email);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <label htmlFor={'nome'}>Nome:</label>
                    <input type={'text'} id={'nome'} name={'nome'} value={newsletterForm.nome} onChange={(event) => handleInputChange(event)}/>
                    <label htmlFor={'email'}>Email:</label>
                    <input type={'text'} name={'email'} id={'email'} value={newsletterForm.email} onChange={(event) => handleInputChange(event)}/>
                    <button type={'submit'}>Enviar</button>
                </div>
            </form>
        </>
    );
};


export default App;
