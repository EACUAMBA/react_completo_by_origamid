import React from 'react';

const Produto = ({produto}) => {
    if(produto){
        return (
                    <div key={produto.id}>
                        <p><b>ID:</b><span>{' ' + produto['id']}</span></p>
                        {
                            produto['fotos'].map((foto, index)=>{
                                return (
                                    <figure key={index} style={{width: '100px'}}>
                                        <img style={{maxWidth: '100%', display: 'block'}} src={foto['src']} alt={foto['titulo']}/>
                                        <figcaption>
                                            <span>
                                                {foto['titulo']}
                                            </span>
                                        </figcaption>
                                    </figure>

                                );
                            })
                        }
                        <p><b>Nome:</b><span>{' ' + produto['nome']}</span></p>
                        <p><b>Preço:</b><span>{' ' + produto['preco']}</span></p>
                        <p><b>Descrição:</b><span>{' ' + produto['descricao']}</span></p>
                        <p><b>Vendido:</b><span>{' ' + produto['vendido']}</span></p>
                        <p><b>ID do Utilizador:</b><span>{' ' + produto['usuario_id']}</span></p>
                    </div>

        );
    }
    else
        return null;
}


export default Produto;
