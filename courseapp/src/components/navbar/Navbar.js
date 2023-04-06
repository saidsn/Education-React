import React from 'react';
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png.webp';
import {FiPhoneCall} from "react-icons/fi";




function MyNavbar() {

  return (

    <Navbar className='navArea'>
      <div className='myNavbar'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='logo'>
              <img src={logo} alt="" />
              <span>Course</span>
            </div>
            <Nav className="me-auto my-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Courses</Nav.Link>
              <Nav.Link href="#link">Elements</Nav.Link>
              <Nav.Link href="#link">News</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
      <div className='contact'>
        <FiPhoneCall style={{fontSize:"25px",marginRight:"10px"}}/>
        <span>+994 50 500 50 50</span>
      </div>
    </Navbar>

  )
}

export default MyNavbar;
