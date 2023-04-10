import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';


function MyNavbar() {

  return (

    <header className="header d-flex flex-row">
      <div className="header_content d-flex flex-row align-items-center">

        <div className="logo_container">
          <div className="logo">
            <img src='./images/Home/logo.png.webp' alt="" />
            <span>course</span>
          </div>
        </div>

        <nav className="main_nav_container">
          <div className="main_nav">
            <ul className="main_nav_list">
              <Link className="main_nav_item" to="/"><a href="#">home</a></Link>
              <Link className="main_nav_item" to=""><a href="#">about us</a></Link>
              <Link className="main_nav_item" to="/Course"><a href="courses.html">courses</a></Link>
              <Link className="main_nav_item"><a href="elements.html">elements</a></Link>
              <Link className="main_nav_item" to="/News"><a href="news.html">news</a></Link>
              <Link className="main_nav_item"><a href="contact.html">contact</a></Link>
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
