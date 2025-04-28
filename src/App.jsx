import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Parallax from './components/Parallax/Parallax';
import Accordion from './components/Accordion/Accordion';
import Final from './components/Final/Final';
import Scroll from './components/Scroll/Scroll';

import './styles/App.css';  
import './styles/variables.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Education />
      <Parallax />
      <Accordion />
      <Final />

      <Scroll />
    </div>
  );
}

export default App;
