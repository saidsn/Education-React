import React from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Course from '../pages/courses/Course';
import News from '../pages/news/News';
import Contact from '../pages/contact/Contact';
import Login from '../pages/account/Login';
import Register from '../pages/account/Register';
import SliderCreate from '../pages/admin/slider/SliderCreate';
import SliderTable from '../pages/admin/slider/SliderTable';


function App() {
  return (
    <>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/SliderCreate" element={<SliderCreate />} />
          <Route path="/SliderTable" element={<SliderTable />} />
        </Routes>
        <Footer />

    </>
  );
}

export default App;
