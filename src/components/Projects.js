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
        <div className="projectlist">
          <div className="projectContainer">
            <img src={Picket} alt="Picket Project"/>
          <div className="projectDescription" align="left">
            <h3>
              Picket
            </h3>
            <div>
            A progressive web app that provides a platform for grassroots organizing.
            </div>
          </div>
          </div>

          <div className="projectContainer">
          <div className="projectDescription">
          <h3>
              Codenames Boardgames
            </h3>
            <div>
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
