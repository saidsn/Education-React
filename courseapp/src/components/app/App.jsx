import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import Navbar from '../navbar/Navbar';
import Home from '../../pages/home/Home';
import Course from '../../pages/courses/Course';
import News from '../../pages/news/News';
import Footer from '../footer/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/news" element={<News/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
