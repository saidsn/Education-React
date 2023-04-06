import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './navbar/Navbar'
import Myslider from './slider/slider';
import "aos/dist/aos.css";
import Card  from './card/Card';

function App() {
  return (
    <>
      <div className='container'>
        <MyNavbar />
      </div>
      <Myslider />
      <Card/>
    </>
  );  
}

export default App;
