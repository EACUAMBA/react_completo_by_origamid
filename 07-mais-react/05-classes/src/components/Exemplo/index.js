import React from 'react';

class Exemplo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comprado: false
        };
    }

    componentDidMount() {
        console.log("Eu montei agora, uau!")
    }

    componentDidUpdate() {
        console.log("Eu actualizei agora, uau!")
    }
    componentWillUnmount() {
        console.log("Eu desmontei agora, uau!")
    }

    render() {
        return (
            <>
                <h1>Componente feito com classe </h1>
                <h1>Nome: {this.props.nome}</h1>
                {
                    this.state.comprado && <h1>Comprado</h1>
                }
                <button onClick={()=>this.setState((state)=>({comprado: !state.comprado }))}>Comprar</button>

            </>
        );
    }
}

export default Exemplo;