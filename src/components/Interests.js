import React, { Component } from 'react';
import '../App.css';

export default class Interests extends Component {
  render() {
    return (
      <div className="interests">
        <div className="interestTitle">
        In my spare time, I enjoy...
        </div>
        <div className="interestList">
          <div className="interestElement">
            Reading 📚
          </div >
          <div className="interestElement">
            Cooking 🍳
          </div>
          <div className="interestElement">
            Walking 👣
          </div>
        </div>


      </div>
    )
  }
}
