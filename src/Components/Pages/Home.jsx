import React from 'react'
import Navbar1 from '../Common/Navbar1'
import Navbar2 from '../Common/Navbar2'
import HeroSection from '../Home/HeroSection'
import ServiceSection from '../Home/ServiceSection';
import Solutions from "../Home/Solutions";

const Home = () => {
  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <HeroSection/>
    <ServiceSection/>
    <Solutions/>
    </>
  )
}

export default Home