import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroBanner from './components/HHeroBanner';
import SectionOne from './components/sections/SectionOne';
import SectionTwo from './components/sections/SectionTwo';
import SectionThree from './components/sections/SectionThree';
import {scrollSpy, Events} from 'react-scroll'
import SectionFour from './components/sections/SectionFour';
import { Box } from '@chakra-ui/react';
import SectionFive from './components/sections/SectionFive';
import SectionSix from './components/sections/SectionSix';
import SectionSeven from './components/sections/SectionSeven';
import SectionEight from './components/sections/SectionEight';
import ReviewSection from './components/sections/ReviewSection';
import AwardSection from './components/sections/AwardSection';
import SectionNine from './components/sections/SectionNine';



function App() {
  const [pointer, setPointer] = useState({x: 0, y: 0});



  useEffect(() => {
    window.addEventListener('mousemove', (event)=>{
      setPointer({x: event.clientX, y: event.clientY})
    })

    // window.addEventListener('scroll', (event) => {
    //   const scrolly = window.scrollY
    //   // setPointer({...pointer, y: scrolly})
    // })
  }, []);
  return (
    <Box className="App" position={'relative'}>
      <Box width={5} height={5} rounded={'full'} zIndex={300} position={'absolute'} left={pointer.x} top={pointer.y} bg={'blue'}></Box>
      <Navbar />
      <HeroBanner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <ReviewSection />
      <AwardSection />
      <SectionNine />
    </Box>
  );
}

export default App;
