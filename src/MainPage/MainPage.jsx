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
    <Home/>
    <ControlledOpenSpeedDial/>
   <About/>
   <Pallette/>
   <Portfolio/>
   <Skills/>
   <Contact/>
   </>
  )
}

export default MainPage