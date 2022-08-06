import React from 'react';
import styles from './index.module.css';
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import PropTypes from 'prop-types';
import Head from "../../components/helper/Head";
import {Route, Routes} from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import LoginCreate from "../Login/LoginCreate";
import LoginPasswordLost from "../Login/LoginPasswordLost";
import LoginPasswordReset from "../Login/LoginPasswordReset";
import NotFound404 from "../../components/NotFound404";

const Feed = ({user}) => {
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([1])
    const [infinite, setInfinite] = React.useState(false);
    const [wait, setWait] = React.useState(false);
    React.useEffect(() => {
        function infiniteScroll() {
            if (infinite) return;
            const scroll = window.scrollY;
            const height = document.body.offsetHeight - window.innerHeight;
            if (scroll > height * .75 && !wait) {
                setPages((old) => [...old, old.length + 1])
                setWait(true)
                setTimeout(() => {
                    setWait(false)
                }, 1000)
            }
        }

        window.addEventListener('wheel', infiniteScroll)
        window.addEventListener('scroll', infiniteScroll)

        return () => {
            window.removeEventListener('wheel', infiniteScroll)
            window.removeEventListener('scroll', infiniteScroll)
        }
    }, [infinite, pages, wait])

    return (
        <div>
            <Head title={'Feed'} description={'Site Dogs, sua rede para cachoros.'}/>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
            {
                pages.map((page) => {
                    return <span key={page}> <FeedPhotos page={page} user={user} setModalPhoto={setModalPhoto}
                                                         setInfinite={setInfinite}/></span>
                })
            }
            {
                (infinite) ? <section className={`${styles.info}`}>Acabaram as fotos.</section> : null
            }
        </div>
    );
};

Feed.defaultProps={
    user: 0
}

Feed.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]
    ).isRequired
}

export default Feed;
