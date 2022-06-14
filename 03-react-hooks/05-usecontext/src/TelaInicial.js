import React from 'react';
import {GlobalContext} from "./GlobalContext";
import Produto from "./Produto";
import Circle from "./circle";
import CleanerButton from "./CleanerButton";

const TelaInicial = () => {
    const {produtos, limparDados} = React.useContext(GlobalContext);
    if (produtos) {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <CleanerButton/>
                <br/>
                {
                    [...produtos].map(
                        (produto)=>{
                            return <span key={produto['id']}><Produto produto={produto}/></span>;
                        }
                    )
                }


            </div>
        );
    } else
        return <Circle/>;
};

export default TelaInicial;
