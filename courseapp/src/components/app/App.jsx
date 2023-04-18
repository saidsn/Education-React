import React, {Suspense} from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





// import Navbar  from '../../components/navbar/Navbar';
const Navbar = React.lazy(() => import('../../components/navbar/Navbar'));
// import Home from '../../pages/home/Home';
const Home = React.lazy(() => import('../../pages/home/Home'));
// import Course from '../../pages/courses/Course';
const Course = React.lazy(() => import('../../pages/courses/Course'));
// import News from '../../pages/news/News';
const News = React.lazy(() => import('../../pages/news/News'));
// import Contact from '../../pages/contact/Contact';
const Contact = React.lazy(() => import('../../pages/contact/Contact'));
// import Footer from '../../components/footer/Footer';
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
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
