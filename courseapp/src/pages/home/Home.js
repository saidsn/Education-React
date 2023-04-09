import React from 'react'
import  Navbar  from '../../components/navbar/Navbar';
import  Slider  from '../../components/slider/Slider';
import Banner from '../../components/banner/Banner';
import  Card  from '../../components/card/Card';
import  Register  from '../../components/register/Register';
import Service from '../../components/service/Service';

function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Card/>
      <Register/>
      <Service/>
    </>
  )
}

export default Home;
