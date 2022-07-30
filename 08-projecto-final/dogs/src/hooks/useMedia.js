import React from 'react';

const useMedia = (media) => {
    const [match, setMatch] = React.useState(null);

    React.useEffect(()=>{
        function changeMatch(){
            const {matches} = window.matchMedia(media);
            setMatch(matches);

            return ()=>{window.removeEventListener('resize', changeMatch)}
        }
        changeMatch()

        window.addEventListener('resize', changeMatch)
    }, [media])

    return [match];
};

export default useMedia;
