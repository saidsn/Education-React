import React from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Course from './pages/courses/Course';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import SliderCreate from './pages/admin/slider/SliderCreate';
import SliderTable from './pages/admin/slider/SliderTable';
import Dashboard from './pages/admin/Dashboardd';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sliderCreate" element={<SliderCreate />} />
        <Route path="/sliderTable" element={<SliderTable />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
