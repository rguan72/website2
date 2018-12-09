import React, { Component } from 'react';
import styled from 'styled-components';
import { generator } from 'uigradients';
import logo from './logo.svg';
import mpowered from './img/mpowered.png';
import solarcar from './img/solarcar.png';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import './App.css';

/////// CSS ///////////////
const Background = styled.div`
  ${generator({gradient: 'starfall'})}
  padding: 10em;
  height: 5%;
  display: block;
`
const Name = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 10em;
  color: white;
  text-align: center;
`;

const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 4 em;
  color: white;
  text-align: center;
`;

const SolarCarImg = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`
///////////////////////

//////////////////// REACT COMPONENTS BEGIN /////////////////

class Project1 extends Component {
  render() {
    return (
      <div>
        filler
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Background>
            <Name>Richard Guan</Name>
            <Description> Student, entrepreneur, and math/cs lover at the University of Michigan </Description>
            <a href='https://www.linkedin.com/in/richard-g-403534124/'>
              <img src={linkedin} className='social-img' align="left" alt='LinkedIn'></img>
            </a>
            <a href='https://github.com/rguan72'>
              <img src={github} className='social-img' align="right" alt='GitHub'></img>
            </a>
        </Background>
            <Project1 />
      </div>
    );
  }
}

export default App;
