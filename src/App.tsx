import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroBanner from './components/HHeroBanner';
import SectionOne from './components/sections/SectionOne';
import SectionTwo from './components/sections/SectionTwo';
import SectionThree from './components/sections/SectionThree';

function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroBanner />
     <SectionOne />
     <SectionTwo />
     <SectionThree />
    </div>
  );
}

export default App;
