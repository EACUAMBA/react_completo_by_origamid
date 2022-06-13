import React from 'react';

const Produto = ({apiResource, setLoading}) => {
    const [produto, setProduto] = React.useState(null);

    React.useEffect(() => {
        if (apiResource)
            fetchProduto(apiResource);
    }, [apiResource]);

    async function fetchProduto(apiResource) {
        setLoading(true)
        setProduto(null)
        window.localStorage.setItem('produto', apiResource);
        const produtoJSON = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${apiResource}`).then((response) => response.json());
        setProduto(produtoJSON)
        setLoading(false);
    }

    if(produto){
        return (
            <>
                <div>
                    <p><b>ID:</b><span>{' ' + produto['id']}</span></p>
                    {
                        produto['fotos'].map((foto)=>{
                            return (

                                    <figure key={foto['titulo']} style={{width: '100px'}}>
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
            </>
        );
    }
    else
        return null;
}


export default Produto;
