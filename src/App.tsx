import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroBanner from './components/HHeroBanner';
import SectionOne from './components/sections/SectionOne';
import SectionTwo from './components/sections/SectionTwo';

function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroBanner />
     <SectionOne />
     <SectionTwo />
    </div>
  );
}

export default App;
