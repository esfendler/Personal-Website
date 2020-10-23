import React, { Component } from 'react';
import '../App.css';
import Emily from '../images/Emily.jpg'

// export default () => (
  export default class About extends Component {
    render() {
      return (
  <div id="about">
    <div className="aboutContent">
    <div className="aboutPhoto">
    <img src={Emily} alt="Emily Fendler"/>
    </div>
    <div className="aboutText">
    <p>
    I am a software engineer with previous work experience as a data analyst. The experience of learning Python at Candid and using this new skill to automate part of my core job responsibilities made me want to code full-time. I graduated from Fullstack Academy's Grace Hopper program earlier this year and am eager to continue following my curiosity in a new role.
    </p>
    <p>
      Here's a list of the technologies I've worked with most recently:
    </p>
    <div className="bulletContainer">
    <div>
    <ul className="techSubList">
      <li>JavaScript</li>
      <li>React</li>
      <li>Redux</li>
    </ul>
    </div>
    <div>
    <ul className="techSubList">
      <li>Node.js</li>
      <li>Express</li>
      <li>PostgreSQL</li>
    </ul>
    </div>
    <div>
    <ul className="techSubList">
      <li>Heroku</li>
      <li>Travis</li>
      <li>Gatsby</li>
    </ul>
    </div>
    </div>


    </div>
  </div>
  </div>
)
  }
}
