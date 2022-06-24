import React from 'react';
import estilo from './Title.module.css';

 export default function Title({children}){
     console.log(estilo);
     return <h1 className={estilo.h1}>{ children }</h1>;
 }
