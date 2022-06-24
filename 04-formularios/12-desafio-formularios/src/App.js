import React from 'react';
import Radio from "./Radio";

const App = () => {
    const perguntas = [
        {
            pergunta: '1',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'C',
            id: 'p1'
        },
        {
            pergunta: '2',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'A',
            id: 'p2'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        },
        {
            pergunta: '3',
            options: [
                'A',
                'B',
                'C',
                'D'
            ],
            resposta: 'D',
            id: 'p3'
        }
    ]
    const [pergunta, setPergunta] = React.useState(perguntas[0]);
    const [resposta, setResposta] = React.useState({
        pergunta: pergunta.pergunta,
        resposta: null,
        respostaCorrecta: pergunta.resposta
    });
    const [error, setError] = React.useState(null);
    const [terminou, setTerminou] = React.useState(null);

    function perguntaOnSubmitHandler(event) {
        event.preventDefault();
        if (!resposta.resposta) {
            setError('Seleccione uma alternativa!');
            return;
        }
        setError(null);
        const respostas = saveResposta(resposta);
        const proximaPergunta = determinarProximaPergunta(pergunta, resposta);
        if (proximaPergunta) {
            setPergunta(proximaPergunta);
            setResposta({
                pergunta: proximaPergunta.pergunta,
                resposta: null,
                respostaCorrecta: proximaPergunta.resposta
            })
        } else {
            verificaRespostas(respostas);
        }
    }

    function determinarProximaPergunta(perguntaActual, respostaActual) {
        const perguntaId = pergunta.id;
        const perguntaIdNumber = +perguntaId.replace(/p/, '');
        const proximaPerguntaIdNumber = perguntaIdNumber + 1;
        const proximaPerguntaId = 'p' + proximaPerguntaIdNumber;
        return perguntas.filter((p) => p.id === proximaPerguntaId).pop();
    }

    function verificaRespostas(respostasDadas) {
        const acertos = respostasDadas.filter((r)=> r.resposta === r.respostaCorrecta).length;
        setTerminou(`Você acertou ${acertos} de ${perguntas.length}.`);
    }

    function respostaOnChangeHandler(value) {
        setResposta({...resposta, resposta: value})
    }

    function saveResposta(resposta) {
        const respostasJSON = window.localStorage.getItem('respostas');
        let respostas = JSON.parse(respostasJSON);
        if (respostas) {
            respostas = respostas.filter((r) => r.pergunta !== resposta.pergunta);
            respostas = [...respostas, resposta];
        } else {
            respostas = [resposta]
        }
        window.localStorage.setItem('respostas', JSON.stringify(respostas));
        return respostas;
    }

    if (!terminou) {

        return (
            <>
                <form onSubmit={perguntaOnSubmitHandler}>
                    <fieldset>
                        <legend>
                            {pergunta.pergunta}
                        </legend>
                        <label>
                            <Radio radios={pergunta.options} value={resposta.resposta}
                                   setValue={respostaOnChangeHandler}/>
                        </label>
                    </fieldset>
                    {error && <small style={{color: 'red'}}>{error}</small>}
                    <br/>

                    <button type={"submit"}>Próxima</button>
                </form>
            </>
        );
    } else {
        return (
            <>
                <p>{terminou}</p>
            </>
        );
    }
}
    export default App;
