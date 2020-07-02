import React, { Component } from 'react';
import '../App.css';
import Picket from '../images/Picket.png'
import codeNames from '../images/codeNames.png'

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h3 className="projectSectionTitle">
        PROJECTS
        </h3>
        <div className="projectList">
          <div className="projectContainer">
            <img src={Picket} alt="Picket Project"/>
          <div className="projectDescription" text-align="right">
            <h3 id="picketTitle">
              Picket
            </h3>
            <div>
            <p>A progressive web app that serves as a platform for grassroots organizing.  Users can post events, chat with other attendees and browse events by category.</p>
            <p>Picket was created using React and Node.js.  It was audited using lighthouse in order to comply with PWA standards.</p>

            </div>
          </div>
          </div>

          <div className="projectContainerReverse">
          <div className="projectDescription">
          <h3 className="individualProjectTitle">
              Codenames Boardgames
          </h3>
          <div className="individualProjectText">
            A mock e-commerce site that sells boardgames.
            </div>
          </div>
          <img src={codeNames} alt="codeNames Project"/>
          </div>

        </div>

     </div>
    )
  }
}
