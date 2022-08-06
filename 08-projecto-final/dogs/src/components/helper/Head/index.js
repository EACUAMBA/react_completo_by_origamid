import React from 'react';
import styles from './index.module.css'

const Head = ({title, description}) => {
    React.useEffect(()=>{
        document.title = `${title} | Dogs`;
        document.head.querySelector(`meta[name='description']`).setAttribute('content', description);
    }, [title, description])
    return null;
};

export default Head;
