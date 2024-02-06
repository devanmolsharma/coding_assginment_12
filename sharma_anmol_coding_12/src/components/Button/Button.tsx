import React from "react";
import styled from 'styled-components';
import Props from "./Button.types";

const Button = styled.button<Props>`
padding:10px;
margin:5px;
background-color:${props => (props.disabled == true)?'grey':'blue'}

&:hover{
    cursor: ${props => (props.disabled == true)?'not-allowed':'pointer'};
}

`

export default Button;