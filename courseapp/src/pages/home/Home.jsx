import React from 'react'
import Navbar from '../../components/layout/Navbar';
import '../../../src/assets/styles/Home.css';
import Slider from '../../components/slider/Slider';
import Card from '../../components/card/Card';
import SearchCourse from '../../components/searchCourse/SearchCourse';
import Service from '../../components/service/Service';
import Event from '../../components/event/Event';
import Student from '../../components/student/Student';
import Title from '../../components/title/Title';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/layout/Footer';


function Home() {

  return (
    <>
      <Navbar />
      <Slider />
      <Banner />
      <Title sectionTitle="Popular Courses" />
      <Card />
      <SearchCourse />
      <Title sectionTitle="Our Services" />
      <Service />
      <Student />
      <Title sectionTitle="Upcoming Events" />
      <Event />
      <Footer />
    </>
  )
}

export default Home;
