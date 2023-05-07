import React from 'react'
import Navbar from '../../components/layout/Navbar';
import '../../../src/assets/styles/Courses.css';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import Footer from '../../components/layout/Footer';

function Course() {
  return (
    <>
      <Navbar />
      <div className='course-page'>
        <Header sectionHeader="Courses" />
        <Title sectionTitle="Popular Courses" />
        <div className='card-area'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Course;
