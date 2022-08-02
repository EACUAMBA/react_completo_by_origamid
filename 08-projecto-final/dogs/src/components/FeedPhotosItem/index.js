import React from 'react';
import styles from './index.module.css'

const FeedPhotosItem = ({photo}) => {
    return (
        <>
            <img src={photo.src} alt={photo.title}/>
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </>

    );
};

export default FeedPhotosItem;
