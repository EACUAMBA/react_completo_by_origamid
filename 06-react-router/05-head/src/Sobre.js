import React from 'react';
import { Helmet } from 'react-helmet';

function Sobre(){
    return (
        <>
            <Helmet>
                <title>Sobre | React Router</title>
                <meta name={'description'} content={'Descrição do sobre'}/>
            </Helmet>
            <div>
                <h1>Sobre do site.</h1>
            </div>
        </>
    );
}

export default Sobre;
