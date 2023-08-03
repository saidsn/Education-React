import React from 'react'
import Navbar from '../../components/layout/Navbar';
import '../../../src/assets/styles/Courses.css';
import Header from '../../components/header/Header';
import Course from '../../components/course/Course';
import Title from '../../components/title/Title';
import Footer from '../../components/layout/Footer';

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <div className='course-page'>
        <Header sectionHeader="Courses" />
        <Title sectionTitle="Popular Courses" />
        <div className='card-area'>
          <Course />
          <Course />
          <Course />
        </div>
      </div>
      <Footer />
    </>

  )
}

export default CoursePage;
