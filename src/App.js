import React, { Component } from 'react';
import Fade from 'react-reveal/Zoom'
import './App.css';
import richard from './img/Richard.jpg';
import solarcar from './img/solarcar.png';
import umich from './img/umich.png'


class Top extends Component {
  render() {
    return (
      <div className="imgbox">
        <h1 className="left-centered"> Richard Guan </h1>
        <img className="center-fit" src={richard} alt="Richard"></img>
      </div>
    );
  }
}

class Work extends Component {
  render() {
    return (
      <div>
        <h2 className="centered top-buffer">What I've Been Doing</h2>
        <img className="one-pic res-img" src={umich} alt="Michigan"></img>
        <div className="one-body">Hello</div>
        <img className="res-img" src={solarcar} alt="Solar Car"></img>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="center">
        This is a footer
      </footer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
