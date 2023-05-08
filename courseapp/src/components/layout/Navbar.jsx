import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

     
function MyNavbar() {

  return (

    <header className="header d-flex flex-row">
      <div className="header_content d-flex flex-row align-items-center">
        
        <div className="logo_container">
          <div className="logo">
            <img src='./images/logo.png.webp' alt="Logo" />
            <span>course</span>
          </div>
        </div>

        <nav className="main_nav_container">
          <div className="main_nav">
            <ul className="main_nav_list">
              <li className="main_nav_item"><Link to="/">home</Link></li>
              <li className="main_nav_item"><Link to="/about">about us</Link></li>
              <li className="main_nav_item"><Link to="/courses">courses</Link></li>
              <li className="main_nav_item"><Link to="/news">news</Link></li>
              <li className="main_nav_item"><Link to="/contact">contact</Link></li>
              <li className="main_nav_item"><Link to="/dashboard">dashboard</Link></li>
            </ul>
          </div>
        </nav>
      </div>
 
      <div className="header_side d-flex flex-row justify-content-center align-items-center">
        <Dropdown>
          <Dropdown.Toggle className='btn btn-light' id="dropdown-basic">
            My Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item ><Link  to = "/login">Login</Link></Dropdown.Item>
            <Dropdown.Item ><Link  to = "/register">Register</Link></Dropdown.Item>
            <Dropdown.Item ><Link  to = "/logout">Logout</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="basket"><SlBasket className='basketIcon'/></Link>
      </div>
 

      <div className="hamburger_container">
        <i className="fas fa-bars trans_200"></i>
      </div>
    </header>

  )
}

export default MyNavbar;
