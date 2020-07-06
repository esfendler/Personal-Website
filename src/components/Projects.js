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
            <p>
            <a href={"http://picketnow.herokuapp.com/"} target="_blank">
              VISIT
              </a>
              &nbsp; | &nbsp;
               <a href={"https://github.com/PicketNow/picket"} target="_blank">
               GITHUB
          </a>
          </p>
            </div>
          </div>
          </div>

          <div className="projectContainerReverse">
          <div className="projectDescription">
          <h3 className="individualProjectTitle">
              Codenames Boardgames
          </h3>
          <div className="individualProjectText">
            <p>A mock e-commerce site that sells boardgames.</p>
            <div>Built with the NERD stack, users can sign in with Google, filter games by category, and check the homepage for items on sale. </div>
            </div>
            <p>
            <a href={"https://codenames-boardgames.herokuapp.com"} target="_blank">
              VISIT
              </a>
              &nbsp; | &nbsp;
               <a href={"https://github.com/graceshopper-codename/graceshopper"} target="_blank">
               GITHUB
          </a>
          </p>

          </div>
          <img src={codeNames} alt="codeNames Project"/>
          </div>

        </div>

     </div>
    )
  }
}
