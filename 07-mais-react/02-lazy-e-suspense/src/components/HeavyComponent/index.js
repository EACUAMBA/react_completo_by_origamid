import React from 'react';
import $ from 'jquery';

function HeavyComponent(props){
    $('body').onclick = () =>{
        alert("Funciona")
        console.log("Funciona");
    }

    return (
        <div id={'div'} >
            <h1>Componente Pesado</h1>
        </div>
    );
}

export default HeavyComponent;