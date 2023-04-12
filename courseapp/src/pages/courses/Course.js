import React from 'react'
import '../../../src/assets/styles/courses.css';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';

function Course() {
  return (
    <div className='course-page'>
      <Header />
      <Title />
      <div className='card-area'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Course;
