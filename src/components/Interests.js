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
          <span role="img" aria-label="stack of books" className="interestElement">
            Reading 📚
          </span >
          <span role="img" aria-label="frying pan" className="interestElement">
            Cooking 🍳
          </span>
          < span role="img" aria-label="foot prints" className="interestElement">
            Walking 👣
          </span>
        </div>


      </div>
    )
  }
}
