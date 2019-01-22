import React, { Component } from 'react';
import Fade from 'react-reveal/Zoom'
import './App.css';
import richard from './img/Richard.jpg';
import solarcar from './img/solarcar.png';
import umich from './img/umich.png';
import mpowered from './img/mpowered.png';
import one80DC from './img/180DC.png';


class Top extends Component {
  render() {
    return (
      <div className="topimgbox">
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
        <div className="overall-container">
          <Fade>
          <div className="item-container">
            <div className="imgbox">
              <img className="res-img" src={umich} alt="Michigan"></img>
            </div>
            <div className="text-body">
              <p> University of Michigan '22 </p>
              <div className="subtitle">
                <strong> Computer Science Major </strong>
              </div>
              <div className="item-text">
                <p> Ann Arbor, MI </p>
                <p>
                  I do cool stuff here!
                </p>
              </div>
            </div>
          </div>
          </Fade>

          <Fade>
          <div className="item-container">
            <div className="imgbox">
              <img className="res-img" src={solarcar} alt="Solar Car"></img>
            </div>
            <div className="text-body">
              <p> University of Michigan '22 </p>
              <div className="subtitle">
                <strong> University of Michigan Solar Car Team, <em> Fall 2018 - Present </em></strong>
              </div>
              <div className="item-text">
                <p> Ann Arbor, MI </p>
                <p>
                  I do cool stuff here!
                </p>
              </div>
            </div>
          </div>
          </Fade>

          <Fade>
          <div className="item-container">
            <div className="imgbox">
              <img className="res-img" src={mpowered} alt="MPowered"></img>
            </div>
            <div className="text-body">
              <p> MPowered Entrepreneurship </p>
              <div className="subtitle">
                <strong> Startup High School Project, <em>Fall 2018 - Present</em></strong>
              </div>
              <div className="item-text">
                <p> Ann Arbor, MI </p>
                <p>
                  I do cool stuff here!
                </p>
              </div>
            </div>
          </div>
          </Fade>

          <Fade>
          <div className="item-container">
            <div className="imgbox">
              <img className="res-img" src={one80DC} alt="180 Degree"></img>
            </div>
            <div className="text-body">
              <p> 180 Degree Consulting </p>
              <div className="subtitle">
                <strong> Startup High School Project, <em>Fall 2018 - Present</em></strong>
              </div>
              <div className="item-text">
                <p> Ann Arbor, MI </p>
                <p>
                  I do cool stuff here!
                </p>
              </div>
            </div>
          </div>
          </Fade>

        </div>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="grey">
        <h2 className="centered top-buffer">Personal Projects</h2>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="left-box">
          <h2> Connect </h2>
          <a href="https://linkedin.com/in/richard-g-403534124/">LinkedIn</a>
          <a href="https://github.com/rguan72">GitHub</a>
          <a href="mailto:guanr@umich.edu">Email</a>
        </div>
        <div className="right-box">
          <h2> More </h2>
          <a href=""> Resume </a>
      </div>
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
