import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = React.lazy(() => import('../../components/navbar/Navbar'));
const Home = React.lazy(() => import('../../pages/home/Home'));
const Course = React.lazy(() => import('../../pages/courses/Course'));
const News = React.lazy(() => import('../../pages/news/News'));
const Contact = React.lazy(() => import('../../pages/contact/Contact'));
const About = React.lazy(() => import('../../pages/about/About'));
const Footer = React.lazy(() => import('../../components/footer/Footer'));


function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
