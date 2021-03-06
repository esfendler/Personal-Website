import React, { Component } from 'react';
import '../App.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <div className="navWrapper">
        <div className="nameWrapper">
          <h1>
          EMILY FENDLER
          </h1>
        </div>

        <div className="navLinks">
            <ul className="navlink">
              <li>
              <a href="#about">ABOUT</a>
              </li>
              <li>
              <a href="#projects">PROJECTS</a>
              </li>
              <li>
              <a href="#contact">CONTACT</a>
              </li>
            </ul>
        </div>
      </div>
      </div>

    )

  }
}
