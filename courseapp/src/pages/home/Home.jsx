import React from 'react'
import  '../../../src/assets/styles/Home.css';
import  Slider  from '../../components/slider/Slider';
import  Card  from '../../components/card/Card';
import SearchCourse from '../../components/searchCourse/SearchCourse';
import Service from '../../components/service/Service';
import Event from '../../components/event/Event';
import Student from '../../components/student/Student';
import Title from '../../components/title/Title';
import Banner from '../../components/banner/Banner';


function Home() {

  return (
    <>
      <Slider/>
      <Banner />
      <Title/>
      <Card/>
      <SearchCourse/>
      <Title/>
      <Service/>
      <Student/>
      <Title/>
      <Event/>
    </>
  )
}

export default Home;
