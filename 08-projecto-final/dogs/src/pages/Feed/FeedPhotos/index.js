import React from 'react';
import styles from './index.module.css'
import FeedPhotosItem from "../../../components/FeedPhotosItem";
import useFetch from "../../../hooks/useFetch";
import {PHOTOS_GET} from "../../../api";
import Error from "../../../components/helper/Error";
import Loading from "../../../components/helper/Loading";

const FeedPhotos= ({setModalPhoto}) => {
    const {data, loading, error, request} = useFetch();

    React.useEffect(
        () => {
            async function fetchPhotos() {
                const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
                const requestResult = await request(url, options);
            }
            fetchPhotos();
        }
        , [request]
    )
    if(error) return <Error error={error}/>;
    if(loading) return <Loading/>
    if(!data) return null;
    return (
        <ul className={`animeLeft ${styles.feed}`}>
            {
                data.map(photo => {
                    console.log('photo', photo)
                    return <li onClick={()=>setModalPhoto(photo)} className={styles.photo} key={photo.id}><FeedPhotosItem photo={photo}/></li>
                })
            }
        </ul>
    );
};

export default FeedPhotos;
