import React from 'react';
import '../App.css';

export default () => (
  <div id="contact">
    <div className="contactTitle">
      Let's connect!
    </div>
    <div className="downloadResumeButton">
        <a
          className="contactPageDownloadLink"
          href="https://github.com/esfendler/Personal-Website/raw/master/Emily%20Fendler%20Resume.pdf"
          target="_blank"
          rel="noopener norefferer"
        >
          Download my resume
        </a>
      </div>


      <div className="contactPage">
      <div className="contactPageSites">You can find me on &nbsp;

        <a
          href="https://www.linkedin.com/in/emily-fendler/"
          target="_blank"
          rel="noopener norefferer"
          className="contact-page__link"
          style={{ width: "85px" }}
        >
          LinkedIn
        </a>
        &nbsp; and &nbsp;
        <a
          href="https://www.github.com/esfendler"
          target="_blank"
          rel="noopener norefferer"
          className="contact-page__link"
          style={{ width: "70px" }}
        >
          Github
        </a>
      </div>
  </div>
  </div>







)
