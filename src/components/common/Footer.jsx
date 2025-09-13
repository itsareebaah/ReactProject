import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-brand">
              <h3 className="footer-title mb-3">
                Codeware Digital
              </h3>
              <p className="footer-description">
                Empowering businesses with smart and scalable digital solutions. 
                We transform ideas into powerful digital experiences.
              </p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section">
              <h4 className="footer-heading mb-3">
                Our Services
              </h4>
              <ul className="footer-links">
                <li><Link to="/services">Custom Web Development</Link></li>
                <li><Link to="/services">Mobile App Development</Link></li>
                <li><Link to="/services">UI/UX Design</Link></li>
                <li><Link to="/services">E-Commerce Solutions</Link></li>
                <li><Link to="/services">Software Consulting</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section">
              <h4 className="footer-heading mb-3">
                Quick Links
              </h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/projects">Portfolio</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section">
              <h4 className="footer-heading mb-3">
                Contact Info
              </h4>
              <div className="contact-info">
  <p className="contact-item">
    <a href="tel:+15551234567" className="text-decoration-none ">
      <i className="fas fa-phone me-2"></i>
      +1 (555) 123-4567
    </a>
  </p>
  <p className="contact-item">
    <a href="mailto:hello@codewaredigital.com" className="text-decoration-none ">
      <i className="fas fa-envelope me-2"></i>
      areeba@gmail.com
    </a>
  </p>
  <p className="contact-item">
    <a
      href="https://www.google.com/maps?q=123+Innovation+Drive,+Tech+Valley,+CA+94000"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none "
    >
      <i className="fas fa-map-marker-alt me-2"></i>
      123 Innovation Drive, Tech Valley, CA 94000
    </a>
  </p>
</div>

              
              <div className="social-links mt-3">
                <h5 className="social-title mb-2">Follow Us</h5>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright mb-0">
                © 2025 Codeware Digital. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-bottom-links">
                <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
                <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
                <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
