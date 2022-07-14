import React from 'react';

function HeavyComponent(props){
console.log("Renderiza")
    return (
        <div id={'div'} >
            <h1>Renderizou mais uma vez</h1>
        </div>
    );
}

//Com o react memo fazemo o nosso componente ser renderizado apenas uma vez.
export default React.memo(HeavyComponent);