import React from 'react';

const Input = ({ id, name,labelValue, ...rest }) => {
  return (
    <>
      <label for={id}>{labelValue}{': '}</label>
      <input name={name} id={id} {...rest} />
    </>
  );
}

export default Input;