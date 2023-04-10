import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/assets/styles/home.css';
import '../../../src/assets/styles/courses.css';
import "aos/dist/aos.css";
import Navbar from '../navbar/Navbar';
import Home from '../../pages/home/Home';
import Course from '../../pages/courses/Course';
import News from '../../pages/news/News';
import Footer from '../footer/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/News" element={<News/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
