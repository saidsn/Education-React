import React from 'react';
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {

  return (

    <Navbar className='navArea'>
      <div className='myNavbar'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='img'>
              <img src="./images/logo.png.webp" alt="" />
              <span>{"Course".toUpperCase()}</span>
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
        <i className="fa-solid fa-phone-volume"></i>
        <span>+994 50 500 50 50</span>
      </div>
    </Navbar>

  )
}

export default MyNavbar;
