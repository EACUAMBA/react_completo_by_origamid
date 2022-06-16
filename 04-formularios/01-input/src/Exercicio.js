import React from 'react';
import Circle from "./circle";
import WarningSign from "./warning-sign";
import CheckAll from "./check-all";

const Exercicio = () => {

    const [error, setError] = React.useState(null);
    const [processando, setProcessando] = React.useState(false);
    const [resposta, setResposta] = React.useState(null);
    const [pessoaForm, setPessoaForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    async function createPessoa(pessoa) {
        setProcessando(true);
        setError(null)
        let response = null;
        let responseJSON = null;
        try {
            response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pessoa)
            }).then((response)=> response);

            responseJSON = await response.json();

            if(response.status !== 200){
                throw Error(responseJSON.message);
            }else {
                setResposta(responseJSON);
            }

        }catch (error){
            setError(error.toString())
        }finally {
            setProcessando(false);
        }
        if(responseJSON){
            console.log(responseJSON)
            setResposta(responseJSON);
        }
    }


    const fieldset = {
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    }
    const div = {
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        width: '100%'
    }





    function handleSubmit(event) {
        event.preventDefault();
        createPessoa(pessoaForm);

    }

    function handleFormChange(event) {
        const {name, value} = event.target;
        setPessoaForm({...pessoaForm, [name]: value});
    }

    if(error) return (
        <div style={div}><WarningSign/>Ocorreu um erro na criação!<br/><br/>{error}</div>
    );
    if(resposta) return (
        <div style={div}><CheckAll/>Criação concluida!<br/><br/>ID:{ ' ' + resposta.ID}<br/>Display Name:{ ' ' + resposta.display_name}</div>
    );
    if(!processando) {
        return (
            <div style={div}>
                <form onSubmit={handleSubmit} style={{display: 'block', width: '100%'}}>
                    <div>
                        <fieldset style={fieldset}>
                            <label htmlFor={'nome'}>Nome:</label>
                            <input type={'text'} id={'nome'} name={'nome'} value={pessoaForm.nome}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <label htmlFor={'email'}>Email:</label>
                            <input type={'email'} id={'email'} name={'email'} value={pessoaForm.email}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <label htmlFor={'senha'}>Senha:</label>
                            <input type={'password'} id={'senha'} name={'senha'} value={pessoaForm.senha}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <label htmlFor={'cep'}>CEP:</label>
                            <input type={'text'} id={'cep'} name={'cep'} value={pessoaForm.cep}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <label htmlFor={'rua'}>Rua:</label>
                            <input type={'text'} id={'rua'} name={'rua'} value={pessoaForm.rua}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <label htmlFor={'numero'}>Número:</label>
                            <input type={'number'} id={'numero'} name={'numero'} value={pessoaForm.numero}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <label htmlFor={'bairro'}>Bairro:</label>
                            <input type={'text'} id={'bairro'} name={'bairro'} value={pessoaForm.bairro}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <label htmlFor={'cidade'}>Cidade:</label>
                            <input type={'text'} id={'cidade'} name={'cidade'} value={pessoaForm.cidade}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <label htmlFor={'estado'}>Estado:</label>
                            <input type={'text'} id={'estado'} name={'estado'} value={pessoaForm.estado}
                                   onChange={handleFormChange}/>
                        </fieldset>

                        <fieldset style={fieldset}>
                            <button type={'submit'}>Enviar</button>
                        </fieldset>
                    </div>
                </form>
            </div>
        );
    }else if(processando){
        return <div style={div}><Circle/></div>
    }

};

export default Exercicio;


// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     // form é o objeto com os dados do formulário
//     body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva
