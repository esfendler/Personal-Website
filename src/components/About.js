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
    I am a software engineer with a background working in the data departments of nonprofits. The experience of learning Python at Candid and using this new skill to automate part of my core job responsibilities made me want to code full-time. As a recent graduate of Fullstack Academy's Grace Hopper program, I’m eager to continue following my curiosity in a new role.
    </p>
    <p>
      Here's a list of the technologies I've worked with most recently:
    </p>
    <div className="bulletContainer">
    <div>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Redux</li>
    </ul>
    </div>
    <div>
    <ul>
      <li>Node.js</li>
      <li>Express</li>
      <li>PostgreSQL</li>
    </ul>
    </div>
    </div>


    </div>
  </div>
  </div>
)
  }
}
