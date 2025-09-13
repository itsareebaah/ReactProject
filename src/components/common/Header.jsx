import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <header>
      <div className="container py-3">
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/" className='logo'>
            <span>Codeware Digital</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Nav.Link>
              <Nav.Link as={Link} to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};
