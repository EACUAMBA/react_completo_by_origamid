import React from 'react';

const PhotoGet = props => {

    const [id, setId] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https:dogsapi.origamid.dev/json/api/photo/' + id)
            .then(value => {console.log(value); return value.json()})
            .then( value => {console.log(value); return value;});

    }

    return (
        <form onSubmit={handleSubmit}>

            <input type={'text'} placeholder={'id'} value={id} onChange={(({target})=> setId(target.value))}/>
            <input type={'submit'} value={'Enviar'}/>
        </form>
    );
};

export default PhotoGet;
