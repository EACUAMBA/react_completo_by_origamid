import React from 'react';
import styles from './index.module.css'
import Image from "../helper/Image";

const FeedPhotosItem = ({photo}) => {
    return (
        <>
            <Image alt={photo.title} src={photo.src}/>
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </>

    );
};

export default FeedPhotosItem;
