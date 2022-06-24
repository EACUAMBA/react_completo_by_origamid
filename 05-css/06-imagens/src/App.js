import React from 'react';
import { InputText } from 'primereact/inputtext';
import alpino from './assets/alpine-6944487_1920.jpg';
import facebook from './assets/facebook-498412.svg';
import {ReactComponent as FacebookComponent} from './assets/facebook-498412.svg';
import Facebook from './Facebook';

const App = () => {
    const [tituloCard, setTituloCard] = React.useState('Samsung Galaxy S21');
    const [cor, setCor ] = React.useState('#4c76be');

    function onChange({target}){
        setTituloCard(target.value)
        for(let i = 0; i <= 9; i++){
            setTimeout(()=>{
                setCor(`#${i}00`)
            }, 10 * i)
        }
        for(let i = 0; i <= 9; i++){
            setTimeout(()=>{
                setCor(`#0${i}0`)
            }, 100 * i)
        }for(let i = 0; i <= 9; i++){
            setTimeout(()=>{
                setCor(`#00${i}`)
            }, 200 * i)
        }

    }

    return (
        <div className={'d-flex justify-content-center align-items-center m-5'}>
            <div className={'card'} style={{width: '24rem'}}>
                <img src={alpino} style={{width: '100%', height: '18rem', background: '#ccc'}} className={'card-img-top'} alt={'Img'}/>
                <div className={'card-body'}>
                    <h5 className={'card-title'}>{ tituloCard }</h5>
                    <p className={'card-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consequatur delectus doloribus excepturi explicabo impedit incidunt magnam natus non provident, quidem quo reprehenderit tenetur vel! Nostrum rem sunt unde?</p>
                    <div className={'d-flex justify-content-between align-items-center'}>
                        <InputText value={tituloCard} onChange={onChange} />
                        <img src={facebook} alt="Facebook"/>
                        <FacebookComponent/>
                        <Facebook fill={cor}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
