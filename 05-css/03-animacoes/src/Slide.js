import React from 'react';
import styles from './slide.module.css';

export default function (props){
    const slides = props.slides;
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    React.useEffect(()=> {
        const {width} = contentRef.current.getBoundingClientRect();
        console.log(width)
        setPosition(-(width * active));
        console.log(width * active)
    }, [active])

    function slidePrev(){
    if(active > 0)
        setActive( active - 1)
    }

    function slideNext(){
    if (active < slides.length - 1)
        setActive( active + 1)
    }

    return (
        <section className={styles.container}>
            <div ref={contentRef} className={styles.content} style={{transform: `translateX(${position}px)`}}>
                {
                    slides.map((slide) =>{
                        return (
                            <div key={slide.id} className={styles.item}>
                                {slide.text}
                            </div>
                        );
                    })
                }
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    );
}
