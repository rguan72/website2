import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import './App.css';
import 'animate.css/animate.min.css'
import solarcar from './img/solarcar.png';
import umich from './img/umich.jpg';
import mpowered from './img/mpowered.png';
import one80DC from './img/180DC.png';
import envelope from './img/envelope.png';
import linkedin from './img/linkedin.png';
import github from './img/github.png';
import resume from './img/resume.pdf';


class Top extends Component {
  render() {
    return (
      <div className="parallax">
          <h1 className="left-centered"> I'm Richard Guan </h1>
      </div>
    );
  }
}

class Work extends Component {
  render() {
    return (
      <div>
        <h2 className="centered small-top-buffer top-pad"> What I've Been Doing </h2>
        <div className="overall-container">

          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
          >
          <div className="item-container">
            <div className="img-background">
              <div className="imgbox">
                <img className="res-img" src={umich} alt="Michigan"></img>
              </div>
            </div>
            <div className="text-body">
              <p> University of Michigan '22 </p>
              <div className="subtitle">
                <strong> Computer Science Major, <em> Fall 2018 - Present </em></strong>
              </div>
              <div className="item-text">
                <p> Ann Arbor, MI </p>
                <p>
                  I'm a CS major and Mathematics minor at the University of Michigan.
                  I last semester, I took Intro to Programming (ENGR 151), Linear Algebra (Math 214),
                  and Physics. This semester, I'm taking an intro engineering course (ENGR 100),
                  Programming and Data Structures (EECS 280), Intro to Combinatorics (Math 465),
                  and Calc 3 (Math 215). Next semester, I will take Data Structures and
                  Algorithms (EECS 281).
                </p>
              </div>
            </div>
          </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
          >
          <div className="item-container">
            <div className="img-background">
              <div className="imgbox">
                <img className="res-img" src={solarcar} alt="Solar Car"></img>
              </div>
            </div>
            <div className="text-body">
              <p> Software/Strategy Team </p>
              <div className="subtitle">
                <strong> University of Michigan Solar Car Team, <em> Fall 2018 - Present </em></strong>
              </div>
                <p> Ann Arbor, MI </p>
                <p>
                  As a member of the Software Infrastructure and Strategy team on Solar Car,
                  I added features to a Django-based web training team strategists for the World Solar Challenge.
                  Since my best language is Python, my focus was on the back end,
                  although I also spent a considerable amount of time on the front end (Javascript, HTML/CSS).
                </p>
            </div>
          </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
          >
          <div className="item-container">
            <div className="img-background">
              <div className="imgbox">
                <img className="mpow" src={mpowered} alt="MPowered"></img>
              </div>
            </div>
            <div className="text-body">
              <p> MPowered Entrepreneurship </p>
              <div className="subtitle">
                <strong> Startup High School Project, <em>Fall 2018 - Present</em></strong>
              </div>
                <p> Ann Arbor, MI </p>
                <p>
                  I am on the Startup High School team on MPowered; we are organizing
                  a pitch competition held on UMich campus (Ross School of Business)
                  for high schoolers. My focus is on getting sponsors for the event.
                </p>
            </div>
          </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
          >
          <div className="item-container">
            <div className="img-background">
              <div className="imgbox">
                <img className="res-img" src={one80DC} alt="180 Degree"></img>
              </div>
            </div>
            <div className="text-body">
              <p> 180 Degree Consulting </p>
              <div className="subtitle">
                <strong> Startup High School Project, <em>Fall 2018 - Present</em></strong>
              </div>
              <div className="item-text">
                <p> Ann Arbor, MI </p>
                <p>
                  I am a Business Analyst for 180 Degree Consulting at Michigan.
                  I'm very excited to develop the business skills I will need to
                  launch my own tech startup!
                </p>
              </div>
            </div>
          </div>
          </ScrollAnimation>

        </div>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="dark">
        <h2 className="centered top-pad top-buffer light-txt">
          What I've Done in My Spare Time
        </h2>
        <div className="overall-container">

          <div className="card">
            <small>Fall 2018 - Present</small>
            <h3>
              <span> SnapCal </span>
              <span className="float-right">
                <a href="https://github.com/rguan72/SnapCal2" target="_blank" rel="noopener noreferrer">
                  <img src={github} className="github" alt="Repo"></img>
                </a>
              </span>
              <p className="proj">
                It takes a long time to manually enter everything from fliers into
                computer vision. SnapCal streamlines this process by using
                the Google Cloud Vision API to extract text from fliers and add
                them to your Google Calendar.
              </p>
              <b>
                Web app and soon to be Mobile app calendar widget.
              </b>
              <a href="https://snapcal.richardguan.me/" className="out-link checkout" target="_blank" rel="noopener noreferrer">
                Check Out
              </a>
            </h3>
          </div>

          <div className="card extra-bottom">
            <small>November 2018</small>
            <h3>
              <span> AutoRegister </span>
              <span className="float-right">
                <a href="https://github.com/rguan72/AutoRegister" target="_blank" rel="noopener noreferrer">
                  <img src={github} className="github" alt="Repo"></img>
                </a>
              </span>
              <p className="proj">
                Getting into all the classes you want is hard at UMich. To make it much
                faster to register for classes, here is a Python Selenium script that
                opens Wolverine Access and registers for your selected classes
                the moment registration opens for you.
              </p>
              <b>
                Python script automating class registration with Selenium.
              </b>
            </h3>
          </div>

        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer-background">
        <footer className="footer">
          <div className="left-box">
            <h2> Connect </h2>
            <div className="symbol-container">
              <a href="https://linkedin.com/in/richard-g-403534124/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="" className="linkedin"></img>
              </a>
              <a href="https://github.com/rguan72" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="" className="github"></img>
              </a>
              <a href="mailto:guanr@umich.edu" target="_blank" rel="noopener noreferrer">
                <img src={envelope} alt="" className="mail"></img>
              </a>
              {/* // <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
            </div>
          </div>
          <div className="right-box">
            <h2> More </h2>
            <a className="out-link" href={resume} target="_blank" rel="noopener noreferrer">
              <strong>Resume</strong>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <Work />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
