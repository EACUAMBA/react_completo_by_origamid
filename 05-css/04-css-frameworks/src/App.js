import React from 'react';
import { InputText } from 'primereact/inputtext';

const App = () => {
const [tituloCard, setTituloCard] = React.useState('Samsung Galaxy S21');

    return (
        <div className={'d-flex justify-content-center align-items-center m-5'}>
            <div className={'card'} style={{width: '24rem'}}>
                <div style={{width: '100%', height: '18rem', background: '#ccc'}} className={'card-img-top'}/>
                <div className={'card-body'}>
                    <h5 className={'card-title'}>{ tituloCard }</h5>
                    <p className={'card-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consequatur delectus doloribus excepturi explicabo impedit incidunt magnam natus non provident, quidem quo reprehenderit tenetur vel! Nostrum rem sunt unde?</p>
                    <div className={'d-flex justify-content-between '}>
                        <InputText value={tituloCard} onChange={({target})=> setTituloCard(target.value)} />
                        <a href={'.'} className={'btn btn-primary d-flex justify-content-center align-items-center'}>Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
