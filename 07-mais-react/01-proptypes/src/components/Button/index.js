import React from 'react';
import PropTypes from 'prop-types'

function Button(props){
    return (
        <button style={{ width: `${props.width}px`, height: `${props.height}px`, margin: `${props.margin}px`}}>{ props.children }</button>
    );
}

Button.defaultProps = {
    margin: 16
}

//Podemos utilizar os PropTyeps para definir algumas regras nas propriedades que recebemos no nosso componente, como por exemplo podemos definir uma propriedade como required, outra como number, assim o react vai verificar se recebemos esse valor e se for passa se não for lança um excepção, isso ajuda no debunguing.

Button.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

export default Button;