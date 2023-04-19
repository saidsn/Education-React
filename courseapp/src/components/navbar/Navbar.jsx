import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
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
            </ul>
          </div>
        </nav>
      </div>
      <div className="header_side d-flex flex-row justify-content-center align-items-center">
        <FiPhoneCall style={{ fontSize: "25px", marginRight: "10px", color: 'white' }} />
        <span>+43 4566 7788 2457</span>
      </div>

      <div className="hamburger_container">
        <i className="fas fa-bars trans_200"></i>
      </div>
    </header>

  )
}

export default MyNavbar;
