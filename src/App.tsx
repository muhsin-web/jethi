import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroBanner from './components/HHeroBanner';
import SectionOne from './components/sections/SectionOne';
import SectionTwo from './components/sections/SectionTwo';
import SectionThree from './components/sections/SectionThree';
import {scrollSpy, Events} from 'react-scroll'



function App() {
  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 70) {
        setNavbarColor('#f00'); // Set your desired background color here
      } else {
        setNavbarColor('transparent');
      }
    };

    Events.scrollEvent.register('scroll', handleScroll);
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('scroll');
    };
  }, []);
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
