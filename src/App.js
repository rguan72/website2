import React, { Component } from 'react';
import Fade from 'react-reveal/Zoom'
// import logo from './logo.svg';
// import filler from './img/Filler.png'
// import shs from './img/startup-highschool-navbar.png';
// import solarcar from './img/solarcar.png';
// import github from './img/github.png';
// import linkedin from './img/linkedin.png';
// import richard from './img/Richard.gif';
import './App.css';


class Top extends Component {
  render() {
    return (
      <div className="grad-1">
        <h1 className="name">Richard Guan</h1>
        <h2 className="description"> Student, entrepreneur, and math/cs lover at the University of Michigan </h2>
        <img src={richard} alt="Richard" className="richard-img"></img>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Top/>

      </div>
    );
  }
}

export default App;
