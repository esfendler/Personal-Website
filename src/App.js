import React from 'react';
import './App.css';
import Navbar from './components/navBar';
import About from './components/About';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    // <div className="App">
    <div>
      <header>
      <Navbar />
      <About/>
      <Interests/>
      <Projects/>
      <Contact/>
      </header>
    </div>
  );
}

export default App;
