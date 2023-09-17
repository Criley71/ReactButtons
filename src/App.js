import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import React, {useState} from 'react';
//think of this as a class but for styles
const theme = {
  green: {
    default: '#49ff33',
    hover: '#33b8ff',
    fontsize: '300px'
  },
  pink: {
    default: '#ff3386',
    hover: '#f3ff33',
    fontsize: '300px'
  },
  blue:{
    default: 'cyan',
    hover: 'purple',
    fontsize: '300px'
  },
  purple:{
    default: 'purple',
    hover: 'blue',
    fontsize: '300px'
  },
  toggle:{
    default: 'red',
    hover: 'maroon',
    fontsize: '150px'
  }
};

/**
 * background color is color of button
 * font family is font
 * margin is y, x distance between objects
 * font-size is, well, font size. can be set to px or  % or large, small 
 * color is text color
 * padding is distacne between text and walls of button 5px = top/bottom    15px = left/right
 * border radius adds rounded corners
 * outline removes outline when button is clicked
 * makes all text uppercase via css
 * curser changes cursor when hovering over it
 * box shadow adds a shadow x y z coordinates cyan color
 * transition sets transition speed for hover, ease is speed, takes 250 ms
 * &hover sets changes when we hover over it
 * disabled sets parameters for when you make the button disabled
 */
/*
const Button = styled.button `
  background-color: #49ff33;
  color: black; 
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: -2px -2px 2px DarkGreen;
  transition: ease background-color 250ms;
  &:hover {
    background-color: green;
  }
`;*/
const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  margin: 10px 20px;
  font-size: 200px;
  color: black; 
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: -2px -2px 2px DarkGreen;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
    background-color: ${props => theme[props.theme].default};
  }
`;

//can be used at background color or hover via background-color: ${props => theme[props.theme].default};
//the button object can now have the tag theme and set it equal to a possible style we defined making this not need
/* props are references to tags inside the html elements



build off of already created Button
if not active then opacity is .7 if active then opacity is 1
*/
const ButtonToggle = styled(Button)`
  opacity: 0.35;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    background-color: LightGreen;  
  `}
`;
Button.defaultProps = {
  theme: 'pink'
}
const types = ['type1', 'type2', 'type3'];

function ToggleGroup(){
  const [active, setActive] = useState(types[0]); //this is a react hook, when we run this togglegroup it will initialize the object
  //to be in state type[0]
  return (
    <div>
      {types.map(type => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)} theme='toggle'>
          {type}
        </ButtonToggle>
      ))}
    </div>
  )
}

const Tab = styled.button `
  padding: 10px 30px;
  font-size: 200px;
  cursor: pointer;
  text-transform: uppercase;
  opacity 0.6;
  background: #282c34;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({active}) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
    `
  }
`;

function TabGroup(){
  const [active, setActive] = useState(types[0]);
  return(
    <>
      <div>
        {types.map(type => (
          <Tab
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </Tab>
        ))}
        
      </div>
      <p 
      style={{fontSize: 100}}
      >Current type: {active}</p>
    </>
  );
}

function App() {
  let count = 0;
  const ClickMe = () => alert('You clicked me');

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Button onClick={ClickMe} theme="pink">BUTTON 1</Button>
            <Button onClick={ClickMe} theme="green">button 2</Button>
            <Button disabled onClick={ClickMe} theme='blue'>disabled</Button>
            <a href='https://google.com' target='_blank'>
              <Button theme='purple'>linker</Button>
            </a>
            <ToggleGroup></ToggleGroup>
            <TabGroup></TabGroup>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;




