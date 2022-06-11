import React from 'react';
import Home from './Home';
import Produtos from './Produtos';

export default function Router(props) {
  const { pathname } = window.location;
  if(pathname.endsWith('produtos')){
    return (
      <Produtos {...props}/>
    );
  }else{
    return (
      <Home {...props}/>
    );
  }
  
}