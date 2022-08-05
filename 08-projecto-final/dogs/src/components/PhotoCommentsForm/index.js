import React from 'react';
import {ReactComponent as Enviar} from "./../../assets/enviar.svg";
import useFetch from "../../hooks/useFetch";
import {COMMENT_POST} from "../../api";
import Error from "../helper/Error";
import styles from './index.module.css'


const PhotoCommentsForm = ({id, setComments}) => {
    const {request, error} = useFetch();
    const [comment, setComment] = React.useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment})
        const {response, json} = await request(url, options);
        if(response.ok){
            setComments((comments)=> [...comments, json])
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <textarea className={styles.textarea} name="comment" id="comment" placeholder={'Comente..'} value={comment} onChange={({target})=>setComment(target.value)}/>
            <button className={styles.button}><Enviar/></button>
            <Error error={error}/>
        </form>
    );
};

export default PhotoCommentsForm;
