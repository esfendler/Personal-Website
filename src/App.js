import React from 'react';
import './App.css';
import Navbar from './components/navBar';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (

    // <div className="App">
    <div>
      <Navbar />
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
