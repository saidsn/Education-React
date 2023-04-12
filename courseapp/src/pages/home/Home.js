import React from 'react'
import '../../../src/assets/styles/home.css';
import  Slider  from '../../components/slider/Slider';
import  Card  from '../../components/card/Card';
import  Register  from '../../components/register/Register';
import Service from '../../components/service/Service';
import Event from '../../components/event/Event';
import Student from '../../components/student/Student';
import Title from '../../components/title/Title';


function Home() {

  return (
    <div>
      <Slider/>
      <Title/>
      <Card/>
      <Register/>
      <Title/>
      <Service/>
      <Student/>
      <Title/>
      <Event/>
    </div>
  )
}

export default Home;
