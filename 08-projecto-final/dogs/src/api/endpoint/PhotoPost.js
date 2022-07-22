import React from 'react';

const UserPost = () => {
    const [token, setToken] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [image, setImage] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('img', image);
        formData.append('nome', nome);
        formData.append('peso', peso);
        formData.append('idade', idade);

        fetch('https://dogsapi.origamid.dev/json/api/photo', {
            method: 'POST',
            headers:{
                Authorization:'Bearer ' + token
            },
            body:formData
        }).then(value => {console.log(value); return value.json();})
            .then(value => {console.log(value); return value;});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={'token'} value={token} onChange={({target}) => setToken(target.value)}/>
            <input type="text" placeholder={'nome'} value={nome} onChange={({target}) => setNome(target.value)}/>
            <input type="text" placeholder={'peso'} value={peso} onChange={({target}) => setPeso(target.value)}/>
            <input type="text" placeholder={'idade'} value={idade} onChange={({target}) => setIdade(target.value)}/>
            <input type="file" placeholder={'image'} onChange={({target}) => setImage(target.files[0])}/>
            <button type={"submit"}>Enviar</button>
        </form>
    );
};

export default UserPost;
