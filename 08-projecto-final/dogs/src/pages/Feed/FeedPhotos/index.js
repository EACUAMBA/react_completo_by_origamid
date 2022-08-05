import React from 'react';
import styles from './index.module.css'
import FeedPhotosItem from "../../../components/FeedPhotosItem";
import useFetch from "../../../hooks/useFetch";
import {PHOTOS_GET} from "../../../api";
import Error from "../../../components/helper/Error";
import Loading from "../../../components/helper/Loading";

const FeedPhotos= ({setModalPhoto, user, page, setInfinite}) => {
    const {data, loading, error, request} = useFetch();

    React.useEffect(
        () => {
            async function fetchPhotos() {
                const total = 3;
                const {url, options} = PHOTOS_GET({page, total: 3, user: user});
                const {response, json} = await request(url, options);
                if(response && response.ok && json.length < total){
                    setInfinite(true)
                }
            }
            fetchPhotos();
        }
        , [request, user]
    )
    if(error) return <Error error={error}/>;
    if(loading) return <Loading/>
    if(!data) return null;
    return (
        <ul className={`animeLeft ${styles.feed}`}>
            {
                data.map(photo => {
                    return <li onClick={()=>setModalPhoto(photo)} className={styles.photo} key={photo.id}><FeedPhotosItem photo={photo}/></li>
                })
            }
        </ul>
    );
};

export default FeedPhotos;
