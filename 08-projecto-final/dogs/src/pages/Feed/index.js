import React from 'react';
import styles from './index.module.css';
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

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

export default Feed;
