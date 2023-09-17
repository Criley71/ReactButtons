import React from 'react'
import styled from 'styled-components'


const theme = {
    green: {
      default: '49ff33',
      hover: '33b8ff'
    },
    pink: {
      default: 'ff3386',
      hover: 'f3ff33'
    }
  };
  
  const ButtonStyle = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: blue;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  } 
  `;

function Button({onClick}) {
    
  return (
    <button onClick={onClick} >buttonName</button>
  )
}

export default Button