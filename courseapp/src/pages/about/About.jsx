import React from 'react'
import Header from '../../components/header/Header';
import AboutUs from '../../components/about/AboutUs';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';


const About = () => {
  return (
    <>
      <Navbar />
      <Header sectionHeader="About Us" />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About;
