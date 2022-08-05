import React from 'react';
import styles from './index.module.css'
import {Link} from "react-router-dom";
import PhotoComments from "../PhotoComments";

const PhotoContent = ({data}) => {
    const {photo, comments} = data;
    console.log(data)
    return (
        <div className={styles.photo}>
            <div className={styles.img}>
                <img src={photo.src} alt={photo.title}/>
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
                        <span className={styles.visualizacoes}>{photo.acessos}</span>
                    </p>
                    <h1 className={'title'}>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>
                            {photo.peso} kg
                        </li>
                        <li>
                            {photo.idade} anos
                        </li>
                    </ul>

                </div>
                <PhotoComments id={photo.id} comments={photo.comments}/>
            </div>
        </div>

    );
};

export default PhotoContent;
