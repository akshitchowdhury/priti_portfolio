import React from 'react'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Pallette from '../components/color_pallete/Pallettee'
import Portfolio from '../components/portfolio/Portfolio'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contact/Contact'
import ControlledOpenSpeedDial from './SpeedDia'

const MainPage = () => {
  return (
    <>
      <Home id="home" />
      <ControlledOpenSpeedDial />
      <About id="about" />
      <Pallette id="pallette" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Contact id="contact" />
    </>
  );
};

export default MainPage;