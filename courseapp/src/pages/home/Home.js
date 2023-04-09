import React from 'react'
import  Navbar  from '../../components/navbar/Navbar';
import  Slider  from '../../components/slider/Slider';
import Banner from '../../components/banner/Banner';
import  Card  from '../../components/card/Card';
import  Register  from '../../components/register/Register';
import Service from '../../components/service/Service';
import Event from '../../components/event/Event';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Card/>
      <Register/>
      <Service/>
      <Event/>
      <Footer/>
    </>
  )
}

export default Home;
