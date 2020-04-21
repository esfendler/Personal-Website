import React, { Component } from 'react';
import '../App.css';
import Picket from '../images/Picket.png'
import codeNames from '../images/codeNames.png'

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h3 className="projectTitle">
        PROJECTS
        </h3>
        <div className="projectlist">
          <div className="projectContainer">
            <img src={Picket} alt="Picket Project"/>


          <div className="projectDescription">

          </div>
          </div>

          <div className="projectContainer">
          <div className="projectDescription">

          </div>
          <img src={codeNames} alt="codeNames Project"/>
          </div>



        </div>

      </div>
    )
  }
}
