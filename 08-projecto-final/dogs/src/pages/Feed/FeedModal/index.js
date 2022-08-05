import React from 'react';
import styles from './index.module.css'
import useFetch from "../../../hooks/useFetch";
import {PHOTO_GET} from "../../../api";
import Error from "../../../components/helper/Error";
import Loading from "../../../components/helper/Loading";
import PhotoContent from "../../../components/PhotoContent";

const FeedModal = ({photo, setModalPhoto}) => {

    const {data, error, loading, request} = useFetch();

    function handleOutsideClick(event) {
        if(event.target === event.currentTarget){
setModalPhoto(null)
        }
    }

    React.useEffect(()=>{
        async function fetchPhoto(){
            const {url, options} = PHOTO_GET(photo.id);
            const requestResponse = await request(url, options);
            console.log(requestResponse)
        }
        fetchPhoto()
    }, [])

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            <Error error={error}/>
            {(loading) && <Loading/>}
            {data && <PhotoContent data={data}/>}
        </div>
    );
};

export default FeedModal;
