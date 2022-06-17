import React from 'react';
import Input from "./Input";
import Select from "./Select";

const App = () => {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [sexo, setSexo] = React.useState('');
    const sexos = ['Masculino', 'Feminino'];
    return (
        <>
            <form>
                <Input id={'nome'} label={'Nome'} name={'nome'} value={nome} setValue={setNome}/>
                <Input id={'email'} label={'Email'} name={'email'} value={email} setValue={setEmail} required/>
                <Select value={sexo} setValue={setSexo} options={sexos} />
                <br/>
                <button type={"submit"}>Enviar</button>
            </form>
        </>
    );
};


export default App;
