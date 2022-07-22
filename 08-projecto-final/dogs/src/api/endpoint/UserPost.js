import React from 'react';

const UserPost = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username, email, password})
        }).then(value => {console.log(value); return value.json();})
            .then(value => {console.log(value); return value;});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={'username'} value={username} onChange={({target}) => setUsername(target.value)}/>
            <input type="text" placeholder={'email'} value={email} onChange={({target}) => setEmail(target.value)}/>
            <input type="text" placeholder={'password'} value={password} onChange={({target}) => setPassword(target.value)}/>
            <button type={"submit"}>Enviar</button>
        </form>
    );
};

export default UserPost;
