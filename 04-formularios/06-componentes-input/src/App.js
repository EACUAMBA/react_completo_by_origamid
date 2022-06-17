import React from 'react';
import Input from "./Input";

const App = () => {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <>
            <form>
                <Input id={'nome'} label={'Nome'} name={'nome'} value={nome} setValue={setNome}/>
                <Input id={'email'} label={'Email'} name={'email'} value={email} setValue={setEmail} required/>
                <br/>
                <button type={"submit"}>Enviar</button>
            </form>
        </>
    );
};


export default App;
