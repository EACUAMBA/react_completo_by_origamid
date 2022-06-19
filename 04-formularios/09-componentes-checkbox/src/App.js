import React from 'react';
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import {InputText} from 'primereact/inputtext';

const App = () => {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [sexo, setSexo] = React.useState('');
    const sexos = ['Masculino', 'Feminino'];

    const [frutas, setFrutas] = React.useState([]);
    const [termos, setTermos] = React.useState([]);

    return (
        <>
            <form>
<InputText />
                <Checkbox checkboxes={['Mamão', 'Ananaz', 'Melancia', 'Pera']} setValue={setFrutas} value={frutas}/>
                <Checkbox checkboxes={['Li e aceito os termos']} setValue={setTermos} value={termos}/>
                <Input id={'nome'} label={'Nome'} name={'nome'} value={nome} setValue={setNome}/>
                <Input id={'email'} label={'Email'} name={'email'} value={email} setValue={setEmail} required/>
                <Select value={sexo} setValue={setSexo} options={sexos} />
                <Radio value={sexo} setValue={setSexo} radios={sexos}/>
                <br/>
                <button type={"submit"}>Enviar</button>
            </form>
        </>
    );
};


export default App;
