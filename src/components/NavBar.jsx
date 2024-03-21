import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; // Import Nav component here
import logo from '../assets/img/posrtfolio.webp';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    


    // <Navbar  className={scrolled ? "scrolled" : ""}>
    //   <Container>
    //     <Navbar.Brand href="/">
    //       <img className="logo" src={logo} alt="Logo" />
    //     </Navbar.Brand>
    //     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
           
    //         <span className="navbar-text">
    //           <div className="social-icon">
    //             <a href="https://www.linkedin.com/in/apoorv15verma"><img src={navIcon1} alt="" /></a>
    //             <a href="https://github.com/apoorv15verma"><img src={navIcon2} alt="" /></a>
    //             <a href="https://instagram.com/apoorvverma25?igshid=NGExMmI2YTkyZg=="><img src={navIcon3} alt="" /></a>
    //           </div>
             
    //           <a href='#connect'>
    //             <button className="vvd"><span>Let’s Connect</span></button>
    //           </a>
            
    //           <a href="https://drive.google.com/file/d/1fs99UWCMM0uH9yuuqCK4kM_n9ou9N69w/view?usp=drivesdk">
    //             <button className="vvd"><span>Download Resume</span></button>
    //             </a>
             
    //         </span>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>


    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="/">
        <img className="logo" src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
       
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/apoorv15verma"><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/apoorv15verma"><img src={navIcon2} alt="" /></a>
            <a href="https://instagram.com/apoorvverma25?igshid=NGExMmI2YTkyZg=="><img src={navIcon3} alt="" /></a>
          </div>
         
          <a href='#connect'>
            <button className="vvd"><span>Let’s Connect</span></button>
          </a>
        
          <a href="https://drive.google.com/file/d/1fs99UWCMM0uH9yuuqCK4kM_n9ou9N69w/view?usp=drivesdk">
            <button className="vvd"><span>Download Resume</span></button>
            </a>
         
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
