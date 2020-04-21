import React, { Component } from 'react';
import '../App.css';
import Emily from '../images/Emily.jpg'

// export default () => (
  export default class About extends Component {
    render() {
      return (
  <div className="about">
    <div className="aboutContent">
    <div className="aboutPhoto">
    <img src={Emily} alt="Emily Fendler"/>
    </div>
    <div className="aboutText">
    I am a software engineer with a background working in the data departments of nonprofits. The experience of learning Python at Candid and using this new skill to automate part of my core job responsibilities made me want to code full-time. As a recent graduate of Fullstack Academy's Grace Hopper program, I’m eager to continue following my curiosity in a new role.
    </div>
    </div>
  </div>
)
  }
}
