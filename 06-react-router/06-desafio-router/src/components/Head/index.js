import React from 'react';

const Head = ({title}) => {
    React.useEffect(()=>{
        document.title = title;
    })


    return (
        <>
        </>
    );
};

export default Head;
