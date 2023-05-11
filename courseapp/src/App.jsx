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
import Dashboard from './pages/admin/Dashboardd';
import SliderCreate from './pages/admin/slider/SliderCreate';
import SliderTable from './pages/admin/slider/SliderTable';
import SliderUpdate from './pages/admin/slider/SliderUpdate';
import HeaderTable from './pages/admin/header/HeaderTable';
import HeaderCreate from './pages/admin/header/HeaderCreate';
import HeaderUpdate from './pages/admin/header/HeaderUpdate';



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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sliderTable" element={<SliderTable />} />
        <Route path="/sliderCreate" element={<SliderCreate />} />
        <Route path="/sliderUpdate/:id" element={<SliderUpdate />} />
        <Route path="/headerTable" element={<HeaderTable />} />
        <Route path="/headerCreate" element={<HeaderCreate />} />
        <Route path="/headerUpdate/:id" element={<HeaderUpdate />} />
      </Routes>
    </>
  );
}

export default App;
