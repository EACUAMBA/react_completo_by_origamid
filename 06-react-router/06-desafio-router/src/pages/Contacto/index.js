import React from 'react';
import Head from "../../components/Head";
import './index.css';

const Contacto = () => {
    return (
        <div className={'contacto'}>
            <Head title={ 'Contacto | Produto'}/>
                <div className={'img'}>

                </div>
                <div className={'contactos'}>
                    <h2>Entre em comtacto</h2>
                    <p>edilsoncuamba@gmail.com</p>
                    <p>7536984125</p>
                    <p>rua ali perto</p>
                </div>

        </div>
    );
};

export default Contacto;
