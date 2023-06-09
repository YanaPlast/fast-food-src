//import React from 'react';
import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    font-size: inherit;
    font-family: inherit;
    background-color: #299B01;
    border-color: transparent;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    color: #fff;
    
    &:hover {
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }

    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border: none;
    }
`;