import React from "react";
import styled from 'styled-components';


export const Container = styled.section`
      overflow: hidden;
    `;

export const Content = styled.div`
  display: flex;

  transform: translateX(${({position})=> position}px);
  transition: transform 0.3s ease;
`;

export const Item = styled.div`
      flex-shrink: 0;
      width: 80%;
      margin: 0 10%;
      padding: 10rem 0;
      background: #eee;
      border-radius: 4px;
      text-align: center;
    `;

export const Nav = styled.nav`
      display: flex;
      justify-content: space-between;
      margin: 1rem auto;
      width: 80%;
    `;

export const Button = styled.button`
      
    `;


