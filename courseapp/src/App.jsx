import React from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Course from './pages/coursepage/CoursePage';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Dashboard from './pages/admin/Dashboard';
import SliderCreate from './pages/admin/slider/SliderCreate';
import SliderTable from './pages/admin/slider/SliderTable';
import SliderUpdate from './pages/admin/slider/SliderUpdate';
import HeaderTable from './pages/admin/header/HeaderTable';
import HeaderCreate from './pages/admin/header/HeaderCreate';
import HeaderUpdate from './pages/admin/header/HeaderUpdate';
import TitleTable from './pages/admin/title/TitleTable';
import TitleCreate from './pages/admin/title/TitleCreate';
import TitleUpdate from './pages/admin/title/TitleUpdate';
import AboutTable from './pages/admin/about/AboutTable'; 
import AboutCreate from './pages/admin/about/AboutCreate'; 
import AboutUpdate from './pages/admin/about/AboutUpdate';
import BannerTable from './pages/admin/banner/BannerTable';
import BannerCreate from './pages/admin/banner/BannerCreate';
import BannerUpdate from './pages/admin/banner/BannerUpdate';
import ServiceTable from './pages/admin/service/ServiceTable';
import ServiceCreate from './pages/admin/service/ServiceCreate';
import ServiceUpdate from './pages/admin/service/ServiceUpdate';
import ContactTable from './pages/admin/contact/ContactTable';
import ContactUpdate from './pages/admin/contact/ContactUpdate';
import ForgotPassword from './pages/account/ForgotPassword';
import ResetPassword from './pages/account/ResetPassword';


function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sliderTable' element={<SliderTable />} />
        <Route path='/sliderCreate' element={<SliderCreate />} />
        <Route path='/sliderUpdate/:id' element={<SliderUpdate />} />
        <Route path='/headerTable' element={<HeaderTable />} />
        <Route path='/headerCreate' element={<HeaderCreate />} />
        <Route path='/headerUpdate/:id' element={<HeaderUpdate />} />
        <Route path='/titleTable' element={<TitleTable />} />
        <Route path='/titleCreate' element={<TitleCreate />} />
        <Route path='/titleUpdate/:id' element={<TitleUpdate />} />
        <Route path='/aboutTable' element={<AboutTable />} />
        <Route path='/aboutCreate' element={<AboutCreate />} />
        <Route path='/aboutUpdate/:id' element={<AboutUpdate />} />
        <Route path='/bannerTable' element={<BannerTable />} />
        <Route path='/bannerCreate' element={<BannerCreate />} />
        <Route path='/bannerUpdate/:id' element={<BannerUpdate />} />
        <Route path='/serviceTable' element={<ServiceTable />} />
        <Route path='/serviceCreate' element={<ServiceCreate />} />
        <Route path='/serviceUpdate/:id' element={<ServiceUpdate />} />
        <Route path='/contactTable' element={<ContactTable />} />
        <Route path='/contactUpdate/:id' element={<ContactUpdate />} />
      </Routes>
  );
}

export default App;
