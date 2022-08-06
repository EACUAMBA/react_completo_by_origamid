import React from 'react';
import styles from './index.module.css'
import useFetch from "../../hooks/useFetch";
import {PHOTO_GET, PHOTOS_GET} from "../../api";
import {useParams} from "react-router-dom";
import PhotoContent from "../../components/PhotoContent";
import Error from "../../components/helper/Error";
import Loading from "../../components/helper/Loading";

const Photo = () => {
    const {request, loading, data, error} = useFetch();
    const {id} = useParams();

    React.useEffect(()=>{
        async function findPhoto(){
            if(!id) return;
            const {url, options} = PHOTO_GET(id)
            const {response, json} = request(url, options);
            if(response && response.ok){

            }
        }

        findPhoto();
    }, [request, id])


    if(loading)return <Loading />;
    if(error)return <Error error={error}/> ;
    if(!data)return null;

    return (
        <section className={`container mainContainer`}>
           <PhotoContent single={true} data={data}/>
        </section>
    );
};

export default Photo;
