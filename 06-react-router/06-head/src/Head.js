import React from 'react';

const Head = (props) => {
    React.useEffect(()=>{
        document.title = props.title + ' | React Router';
        document.querySelector('meta[name="description"]').setAttribute('content', props.description);
    }, [props])

    return (
        <React.Fragment>

        </React.Fragment>
    );
};

export default Head;
