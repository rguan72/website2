import React, { Component } from 'react';
import Fade from 'react-reveal/Zoom'
import './App.css';
import richard from './img/Richard.jpg';
import solarcar from './img/solarcar.png';
import umich from './img/umich.jpg';
import mpowered from './img/mpowered.png';
import one80DC from './img/180DC.png';
import envelope from './img/envelope.png';
import linkedin from './img/linkedin.png';
import github from './img/github.png';


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
                <strong> Computer Science Major, <em> Fall 2018 - Present </em></strong>
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
                  I do cool stuff here! Yo yo yo yo filler. What if this is
                  really long y'know that could cause problems
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

          {/* put snapcal here */}
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

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="left-box">
          <h2> Connect </h2>
          <div className="symbol-container">
            <a href="https://linkedin.com/in/richard-g-403534124/">
              <img src={linkedin} alt="" className="linkedin"></img>
            </a>
            <a href="https://github.com/rguan72">
              <img src={github} alt="" className="github"></img>
            </a>
            <a href="mailto:guanr@umich.edu">
              <img src={envelope} alt="" className="mail"></img>
            </a>
            {/* // <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          </div>
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
