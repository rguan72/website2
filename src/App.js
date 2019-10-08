import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./App.css";
import "animate.css/animate.min.css";
import solarcar from "./img/solarcar.png";
import umich from "./img/umich.png";
import mpowered from "./img/mpowered.png";
import one80DC from "./img/180DC.png";
import envelope from "./img/envelope.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import resume from "./img/resume.pdf";
import croma from "./img/croma.png";
import larky from "./img/larky.png";
import external_link from "./img/link-external.png";

class Top extends Component {
  render() {
    return (
      <div className="parallax">
        <h1 className="left-centered"> Richard Guan </h1>
      </div>
    );
  }
}

class Work extends Component {
  render() {
    return (
      <div>
        <h2 className="centered small-top-buffer top-pad line side-padding">
          What I've Been Doing
        </h2>
        <div className="overall-container">
          <div className="item-container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <a
                href="https://umich.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="img-background"
              >
                <div className="imgbox">
                  <img className="big-m" src={umich} alt="Michigan"></img>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="text-body">
                <p className="green">
                  {" "}
                  <strong> University of Michigan '21 </strong>{" "}
                </p>
                <div className="subtitle">
                  <strong>
                    {" "}
                    Computer Science Major, <em>
                      {" "}
                      September 2018 - Present{" "}
                    </em>{" "}
                  </strong>
                </div>
                <div className="item-text">
                  <p> Ann Arbor, MI </p>
                  <p>
                    I'm a CS major and Mathematics minor at the University of
                    Michigan. At Michigan, I am surrounded by hard-working and
                    entrepreneurially minded peers who inspire me to hustle and
                    learn efficiently.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="item-container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <a
                href="http://info.larky.com/nudge"
                target="_blank"
                rel="noopener noreferrer"
                className="img-background"
              >
                <div className="imgbox">
                  <img className="res-img img-85" src={larky} alt="Larky"></img>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="text-body">
                <p className="green">
                  {" "}
                  <strong> Software Engineering Intern </strong>{" "}
                </p>
                <div className="subtitle">
                  <strong>
                    {" "}
                    Larky, <em> May 2018 - Present </em>
                  </strong>
                </div>
                <p> Ann Arbor, MI </p>
                <p>
                  Larky develops a push notifications library for financial
                  institutions. I'm working with React and Flask to add core
                  functionality to the dashboard clients use to schedule
                  notifications and Java to build out our Android library.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="item-container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <a
                href="http://web.eecs.umich.edu/~wlasecki/croma.html"
                target="_blank"
                rel="noopener noreferrer"
                className="img-background"
              >
                <div className="imgbox">
                  <img
                    className="res-img img-85"
                    src={croma}
                    alt="CRO+MA Lab"
                  ></img>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="text-body">
                <p className="green">
                  {" "}
                  <strong> Undergraduate Researcher </strong>{" "}
                </p>
                <div className="subtitle">
                  <strong>
                    {" "}
                    Crowds and Machine Learning Lab,{" "}
                    <em> April 2018 - Present </em>
                  </strong>
                </div>
                <p> Ann Arbor, MI </p>
                <p>
                  As a member of the CRO+MA lab, I am part of the DevEdu team;
                  we are conducting research to develop tools for students to
                  write more readable code.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="item-container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <a
                href="https://www.solarcar.engin.umich.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="img-background"
              >
                <div className="imgbox">
                  <img className="res-img" src={solarcar} alt="Solar Car"></img>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="text-body">
                <p className="green">
                  {" "}
                  <strong> Software/Strategy Team </strong>{" "}
                </p>
                <div className="subtitle">
                  <strong>
                    {" "}
                    University of Michigan Solar Car Team,{" "}
                    <em> September 2018 - Present </em>
                  </strong>
                </div>
                <p> Ann Arbor, MI </p>
                <p>
                  As a member of the Software Infrastructure and Strategy team
                  on Solar Car, I added features to a Django-based web training
                  team strategists for the World Solar Challenge. My focus was
                  on the Python-based back end, although I also spent a
                  considerable amount of time on the front end (Javascript,
                  HTML/CSS). I made an Electron based desktop app to display
                  solar car telemetry.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="item-container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <a
                href="https://www.180dcmichigan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="img-background"
              >
                <div className="imgbox">
                  <img className="one80" src={one80DC} alt="180 Degree"></img>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="text-body">
                <p className="green">
                  {" "}
                  <strong> 180 Degrees Consulting </strong>{" "}
                </p>
                <div className="subtitle">
                  <strong>
                    {" "}
                    Business Analyst, <em>January 2018 - Present</em>
                  </strong>
                </div>
                <div className="item-text">
                  <p> Ann Arbor, MI </p>
                  <p>
                    I am a Business Analyst for 180 Degree Consulting at
                    Michigan. My first project was to improve user retention on
                    Kiva's experimental crowdvet platform. Researching UI/UX, I
                    provided a wireframe of a redesigned platform in Adobe XD.
                    I'm very excited to develop the business skills I will need
                    to launch my own tech startup!
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="item-container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <a
                href="https://mpowered.umich.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="img-background"
              >
                <div className="imgbox">
                  <img className="mpow" src={mpowered} alt="MPowered"></img>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="text-body">
                <p className="green">
                  {" "}
                  <strong> MPowered Entrepreneurship </strong>{" "}
                </p>
                <div className="subtitle">
                  <strong>
                    {" "}
                    Startup High School Project,{" "}
                    <em>September 2018 - April 2019</em>
                  </strong>
                </div>
                <p> Ann Arbor, MI </p>
                <p>
                  I was on the Startup High School team on MPowered; we
                  organized a pitch competition held on UMich campus (Ross
                  School of Business) for high schoolers. My focus was on
                  getting sponsors for the event.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="gray-green">
        <h2 className="centered top-pad-sm green line-green side-padding">
          What I've Done in My Spare Time
        </h2>
        <div className="overall-container">
          <div className="card">
            <small>July 2019 - August 2019</small>
            <h3>
              <span> StoreBack </span>
              <span className="float-right">
                <a
                  href="https://github.com/rguan72/StoreBack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} className="github" alt="Repo"></img>
                </a>
              </span>
              <p className="proj">
                Creating your own online store can give you full control over
                your business's platform, but it can be a hassle for if you
                don't have backend experience. StoreBack solves this problem by
                creating a backend for an online store and exposing it with a
                REST API to CRUD users, merchants, inventory, and more.
              </p>
              <b>API for online stores.</b>
              <a
                href="https://rguan72.github.io/StoreBack-Landing-Page/"
                className="out-link-1 checkout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Out
              </a>
            </h3>
          </div>

          <div className="card">
            <small>September 2018 - December 2018</small>
            <h3>
              <span> SnapCal </span>
              <span className="float-right">
                <a
                  href="https://github.com/rguan72/SnapCal2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} className="github" alt="Repo"></img>
                </a>
              </span>
              <p className="proj">
                It takes a long time to manually enter everything from fliers
                into computer vision. SnapCal streamlines this process by using
                the Google Cloud Vision API to extract text from fliers and add
                them to your Google Calendar.
              </p>
              <b>Calendar widget web app (soon to be mobile app).</b>
              <a
                href="https://snapcal.richardguan.me/"
                className="out-link-1 checkout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Out
              </a>
            </h3>
          </div>

          <div className="card">
            <small>November 2018</small>
            <h3>
              <span> AutoRegister </span>
              <span className="float-right">
                <a
                  href="https://github.com/rguan72/AutoRegister"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} className="github" alt="Repo"></img>
                </a>
              </span>
              <p className="proj">
                Getting into all the classes you want is hard at UMich. To make
                it much faster to register for classes, here is a Python
                Selenium script that opens Wolverine Access and registers for
                your selected classes the moment registration opens for you.
              </p>
              <b>Python script automating class registration with Selenium.</b>
            </h3>
          </div>

          <div className="card extra-bottom">
            <small>October 2018 </small>
            <h3>
              <span> Laser Tag </span>
              <span className="float-right">
                <a
                  href="https://github.com/rguan72/Laser-Tag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} className="github" alt="Repo"></img>
                </a>
              </span>
              <p className="proj">
                For MHacks 11, I made an Android game using OpenCV, Java and
                Android Studio that is laser tag in real life. Two players try
                to point their selfie cameras at each others' screens to shoot
                each other in the game. On my team, I used OpenCV to allow
                phones to recognize when they were pointing at the opposing
                players' screen.
              </p>
              <b>Android app made in Java.</b>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

class Classes extends Component {
  render() {
    return (
      <div className="gray-green small-top-buffer">
        <h2 className="centered top-pad green line-green side-padding">
          Relevant Courses So Far
        </h2>
        <div className="vertical-flex pad-2 no-pad-b small-top-buffer">
          <div className="horizontal-flex">
            <div className="card less-width small-padding">
              <small>Fall 2019, EECS 281</small>
              <h3>
                <span> Data Structures and Algorithms </span>
                <p className="proj">
                  Required for a CS major. Projects include a maze solver, stock
                  market simulator, and SillyQL. Working with stacks, queues,
                  heaps, trees and more.
                </p>
              </h3>
            </div>

            <div className="card less-width small-padding">
              <small>Fall 2019, EECS 370</small>
              <h3>
                <span> Introduction to Computer Organization </span>
                <p className="proj">
                  Required for a CS major. Learning low-level components of
                  computers and coding projects in C.
                </p>
              </h3>
            </div>

            <div className="card less-width small-padding">
              <small>Fall 2019, Stats 412</small>
              <h3>
                <span> Introduction to Probability Statistics </span>
                <p className="proj">
                  Required for a CS major (as a replacement for Stats 250).
                </p>
              </h3>
            </div>

            <div className="card less-width small-padding">
              <small>Winter 2019, EECS 280</small>
              <h3>
                <span> Introduction to Programming and Data Structures </span>
                <p className="proj">
                  Required for a CS major. Did a CV project, a Euchre project,
                  postfix calculator project, and sentiment analysis machine
                  learning project. Worked with stacks, linked lists and trees.
                </p>
              </h3>
            </div>

            <div className="card less-width small-padding">
              <small>Winter 2019, Math 465</small>
              <h3>
                <span> Introduction to Combinatorics </span>
                <p className="proj">
                  Fulfills the discrete math requirement for a CS major, and
                  counts towards Mathematics minor. Learned fundamental concepts
                  of combinatorics, including Pigeonhole Principle, Generating
                  Functions, and Catalan Numbers. Also learned introductory
                  Graph Theory.
                </p>
              </h3>
            </div>

            <div className="card less-width small-padding">
              <small>Winter 2019, Math 215</small>
              <h3>
                <span> Multivariable Calculus </span>
                <p className="proj">
                  Fulfills one of the math requirements for a CS major.
                  Curriculum covered Double and Triple Integrals, Vector Fields,
                  Green's Theorem, and Divergence Theorem, and Stoke's Theorem.
                </p>
              </h3>
            </div>

            <div className="card less-width small-padding">
              <small>Fall 2018, Math 214</small>
              <h3>
                <span> Linear Algebra </span>
                <p className="proj">
                  Fulfills one of the math requirements for a CS major.
                  Curriculum covered linear transformations, rank-nullity
                  theorem, orthogonality, eigenvectors, and PCA.
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Hobbies extends Component {
  render() {
    return (
      <div className="grad">
        <h2 className="centered top-pad line side-padding green line-green">
          I also like to have fun!
        </h2>
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
            <div className="connect">
              <strong>
                {" "}
                <small> Connect </small>{" "}
              </strong>
            </div>
            <div className="symbol-container">
              <a
                href="https://linkedin.com/in/richard-g-403534124/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="" className="linkedin"></img>
              </a>
              <a
                href="https://github.com/rguan72"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" className="github"></img>
              </a>
              <a
                href="mailto:guanr@umich.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={envelope} alt="" className="mail"></img>
              </a>
            </div>
          </div>
          <div className="right-box">
            <h4>
              <a
                className="external-link out-link-2"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Resume</strong>
                <img src={external_link} alt="link" className="ml-1"></img>
              </a>
            </h4>
            <h4>
              <a
                className="external-link out-link-2"
                href="https://medium.com/@rguan72"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Blog</strong>
                <img src={external_link} alt="link" className="ml-1"></img>
              </a>
            </h4>
          </div>
        </footer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <Work />
        <Classes />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
