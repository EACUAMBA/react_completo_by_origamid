const apiURL = 'https://ranekapi.origamid.dev/json/api/produto';

export function fetchProdutos(setValues) {
    fetch(apiURL).then(value => value.json()).then(value => {
        setValues(value);
    });
}

export async function fetchProduto(id) {
    return await fetch(`${apiURL}/${id}`).then(value => value.json()).then(value => {
        return value
    })
}
