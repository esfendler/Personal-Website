import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (

    <div className="App">
      <Navbar/>
      <About/>
      <header className="App-header">

        <p>
          Emily Fendler
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Projects id="projects"/>
    </div>
  );
}

export default App;
