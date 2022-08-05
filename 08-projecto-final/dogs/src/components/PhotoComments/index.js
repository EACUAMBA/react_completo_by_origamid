import React from 'react';
import styles from './index.module.css';
import {UserContext} from "../../UserContext";
import PhotoCommentsForm from "../PhotoCommentsForm";

const PhotoComments = (props) => {
    const {login} = React.useContext(UserContext)
    const [comments, setComments] = React.useState(() => props.comments);
    const commentSection = React.useRef(null);

    React.useEffect(()=>{
        if(!commentSection.current) return;
        commentSection.current.scrollTop = commentSection.current.scrollHeight;
    })

    if (!login) return null

    return (
        <>
            <ul ref={commentSection} className={styles.comments}>
                {comments.map(comment => <li key={comment.comment_ID}>
                    <b>{comment.comment_author}</b>
                    <span>{comment.comment_content}</span>
                </li>)}
            </ul>
            <PhotoCommentsForm id={props.id} setComments={setComments}/>
        </>
    );

};

export default PhotoComments;
