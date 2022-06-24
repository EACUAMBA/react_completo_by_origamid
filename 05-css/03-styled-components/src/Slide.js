import React from 'react';
import {Nav, Button, Content, Item, Container} from './Components/Components';

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
        <Container>
            <Content ref={contentRef}  position={position}>
                {
                    slides.map((slide) =>{
                        return (
                            <Item key={slide.id}>
                                {slide.text}
                            </Item>
                        );
                    })
                }
            </Content>
            <Nav>
                <Button onClick={slidePrev}>Anterior</Button>
                <Button onClick={slideNext}>Próximo</Button>
            </Nav>
        </Container>
    );
}
