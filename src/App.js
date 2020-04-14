import React from 'react';
import './App.css';
import Navbar from './components/navBar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    // <div className="App">
    <div>
      <header>
      <Navbar />
      <About/>
      <Projects/>
      </header>
    </div>
  );
}

export default App;
