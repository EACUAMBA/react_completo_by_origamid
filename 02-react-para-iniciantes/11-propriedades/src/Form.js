import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = ({onSubmit})=>{
  return (
    <form onSubmit={onSubmit}>
    <p>
    <Input name={'nome'} id={'nome'} labelValue="Nome" required />
    </p>

    <p>
    <Input name={'email'} id={'email'} labelValue="Email" />
    </p>

    <Button value={'Enviar'}/>
    </form>
  );
}

export default Form;