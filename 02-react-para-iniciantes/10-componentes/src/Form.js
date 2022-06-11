import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = ({onSubmit})=>{
  return (
    <form onSubmit={onSubmit}>
    <p>
    <label for={'nome'}>Nome: </label>
    <Input name={'nome'} id={'nome'} />
    </p>

    <p>
    <label for={'email'}>Email: </label>
    <Input name={'email'} id={'email'} />
    </p>

    <Button value={'Enviar'}/>
    </form>
  );
}

export default Form;