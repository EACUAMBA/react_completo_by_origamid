import React from 'react';
import styles from './index.module.css';
import {PHOTO_DELETE} from "../../api";
import useFetch from "../../hooks/useFetch";


const PhotoDelete = ({id}) => {

    const {request, error, loading, data} = useFetch();

    async function handleClick(event) {
        event.preventDefault();
        const confirm = window.confirm("Tem certeza, quer apagar?");
        if (!confirm) return;
        const {url, options} = PHOTO_DELETE(id);
        const {response, json} = await request(url, options);
        if (response.ok) {
            window.location.reload();
        }
    }

    if (loading) {
        return <button disabled={true} className={styles.delete}>Apagar</button>
    }

    return (
        <button onClick={handleClick} className={styles.delete}>Apagar</button>
    );

};

export default PhotoDelete;
