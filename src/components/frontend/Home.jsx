import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AboutImg from '../../assets/images/aboutus.jpg';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import TestimonialSection from '../common/TestimonialSection.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ServiceImg from '../../assets/images/custom.jpg'
import WebImg from '../../assets/images/web.jpg';
import DevImg from '../../assets/images/dev.jpg';
import UIImg from '../../assets/images/ui.jpg';
import EcomImg from '../../assets/images/Ecom.jpg';
import HealthImg from '../../assets/images/health.jpg';
import AiDashboardImg from '../../assets/images/Air.jpg';
import CrmImg from '../../assets/images/cloud.jpg';
import NewImg from '../../assets/images/pic2.jpg';
import { FaRocket, FaUsers, FaLightbulb, FaAward, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <> 
    <Header/>
    {/* Hero section */}
    <main>
        <section className='section1'>
        <div className="hero d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className={`hero-content ${isVisible ? 'fade-in-left' : ''}`}>
                  <span className="hero-badge">Welcome to Codeware Digital</span>
                  <h1 className="hero-title">We Build Scalable & <br />Smart Digital Solutions</h1>
                  <p className="hero-description">From idea to execution, we craft software that drives innovation and growth.</p>
                  <div className='hero-buttons'>
                    <Link to="/contact" className='btn btn-primary'>Contact Now</Link>
                    <Link to="/projects" className='btn btn-secondary ms-3'>View Projects</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={`hero-visual ${isVisible ? 'fade-in-right' : ''}`}>
                  <div className="hero-image-container">
                    <img src={AboutImg} alt="Hero" className="img-fluid rounded-4 shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

    </main>
    
{/* About us */}
<section className='section2 py-5'>
  <div className="container py-5" >
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className={`about-image ${isVisible ? 'fade-in-left' : ''}`}>
          <img src={NewImg} className='w-100 rounded-4 shadow-lg' alt="" />
        </div>
        </div>
        <div className="col-md-6">
        <div className={`about-content ${isVisible ? 'fade-in-right' : ''}`}>
        <span className="section-badge">
          About Us
        </span>
        <h2 className="section-title">Empowering businesses with smart and scalable digital solutions.</h2>
        <p className="section-description">We are passionate about turning ideas into powerful digital solutions. As a modern software development company, we specialize in building scalable web and mobile applications using cutting-edge technologies. Our team of creative designers, skilled developers, and innovative thinkers work together to deliver products that not only meet business goals.</p>
        <Link to="/about" className="btn btn-outline-primary">
          Learn More <FaArrowRight className="ms-2" />
        </Link>
      </div>
      </div>
    </div>
  </div>

</section>

{/* Our services */}

<section className='section-3 bg-light py-5'>
  <div className="container py-5">
    <div className="section-header text-center">
      <span>Our Services</span>
      <h2>We Build Digital Solutions for Your Business</h2>
      <p>From idea to execution, we provide innovative technology services that help your business grow and stay ahead in the digital world.</p>
    </div>
<div className="row pt-4">
  <div className="col-md-3 col-lg-3">
    <div className={`item ${isVisible ? 'slide-up' : ''}`}>
      <div className="service-image">
        <img src={ServiceImg} className='w-100' alt="Custom..." />

      </div>
      <div className="service-body">
        <div className="service-title">
          <h3>Software Development</h3>
          
        </div>
        <div className="service-content">
          <p>We design and develop tailored software solutions that solve your business challenges and improve efficiency.</p>
          <Link to="/services" className='btn btn-primary'>Read More</Link>
          </div>
          
        </div>
    </div>
  </div>
   <div className="col-md-3 col-lg-3">
    <div className={`item ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
      <div className="service-image">
        <img src={WebImg} className='w-100' alt="Custom..." />

      </div>
      <div className="service-body">
        <div className="service-title">
          <h3>Web & App Development</h3>
          
        </div>
        <div className="service-content">
          <p>Engaging, responsive, and user-friendly apps built with the latest technologies.</p>
          <Link to="/services" className='btn btn-primary'>Read More</Link>
          </div>
          
        </div>
    </div>
  </div>
   <div className="col-md-3 col-lg-3">
    <div className={`item ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
      <div className="service-image">
        <img src={DevImg} className='w-100' alt="Custom..." />

      </div>
      <div className="service-body">
        <div className="service-title">
          <h3>Cloud Solutions & DevOps</h3>
          
        </div>
        <div className="service-content">
          <p>Secure, scalable cloud-based solutions with DevOps practices to ensure seamless deployment and performance.</p>
          <Link to="/services" className='btn btn-primary'>Read More</Link>
          </div>
          
        </div>
    </div>
  </div>
   <div className="col-md-3 col-lg-3">
    <div className={`item ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
      <div className="service-image">
        <img src={UIImg} className='w-100' alt="Custom..." />

      </div>
      <div className="service-body">
        <div className="service-title">
          <h3>UI/UX Design & Branding</h3>
          
        </div>
        <div className="service-content">
          <p>We craft beautiful, intuitive designs that give your users the best digital experiences.</p>
          <Link to="/services" className='btn btn-primary'>Read More</Link>
          </div>
          
        </div>
    </div>
  </div>
</div>
  </div>

</section>


{/* Why Choose Us */}

<section className="why-choose-us py-5 pr-5">
  <div className="container text-center">
    <span className="text-primary">Why Choose Us</span>
    <h2 className="mb-4">We Build Trust With Every Project</h2>
    <p className="mb-5">
      Our focus is not only on delivering software but also on creating value, reliability, 
      and long-term partnerships for your business.
    </p>

    <div className="row justify-content-center">
     
      <div className="col-md-4 mb-4">
        <div className={`choose-card ${isVisible ? 'fade-in' : ''}`}>
          <div className="card-icon">
            <FaUsers />
          </div>
          <h4>Expert Team</h4>
          <p>
            Our experienced developers and designers use the latest 
            technologies to craft innovative and scalable solutions.
          </p>
        </div>
      </div>

      
      <div className="col-md-4 mb-4">
        <div className={`choose-card ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          <div className="card-icon">
            <FaAward />
          </div>
          <h4>Quality First</h4>
          <p>
            We follow strict quality standards, ensuring every product 
            we deliver is reliable, secure, and user-friendly.
          </p>
        </div>
      </div>

       
      <div className="col-md-4 mb-4">
        <div className={`choose-card ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="card-icon">
            <FaRocket />
          </div>
          <h4>Ongoing Support</h4>
          <p>
            Our partnership doesn't end at delivery—we provide continuous 
            updates, support, and improvements to help you grow.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Our Projects */}
<section className='section-3 bg-light py-5'>
  <div className="container py-5">
    <div className="section-header text-center">
      <span>Our Projects</span>
      <h2>See How We Turn Ideas Into Reality</h2>
      <p>Explore some of our featured projects where we helped clients achieve success through innovative digital solutions.</p>
    </div>
<div className="row pt-4">
  <div className="col-md-3 col-lg-3">
    <div className={`items ${isVisible ? 'slide-up' : ''}`}>
      <div className="service-images">
        <img src={EcomImg} className='w-100' alt="Custom..." />

      </div>
      <div className="service-bodys">
        <div className="service-titles">
          <h3>E-Commerce Platform</h3>
          
        </div>
        <div className="service-contents">
          <p>A scalable e-commerce solution with secure payment integration and an intuitive shopping experience.</p>
          <a className='btn btn-primary' href="https://www.victorialinen.co.uk/">View Project</a>
          </div>
          
        </div>
    </div>
  </div>

  <div className="col-md-3 col-lg-3">
    <div className={`items ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
      <div className="service-images">
        <img src={AiDashboardImg} className="w-100" alt="AI Analytics Dashboard" />
      </div>
      <div className="service-bodys">
        <div className="service-titles">
          <h3>AI Analytics Dashboard</h3>
        </div>
        <div className="service-contents">
          <p>An intelligent dashboard that delivers real-time data insights to help businesses make smarter decisions.</p>
          <a className="btn btn-primary" href="https://www.tableau.com/" target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-3 col-lg-3">
    <div className={`items ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
      <div className="service-images">
        <img src={HealthImg} className='w-100' alt="Custom..." />

      </div>
      <div className="service-bodys">
        <div className="service-titles">
          <h3>Healthcare Mobile App</h3>
          
        </div>
        <div className="service-contents">
          <p>A patient-friendly mobile app for booking appointments, tracking health data, and connecting with doctors.</p>
          <a className='btn btn-primary' href="https://scopicsoftware.com/web-development/health-and-fitness-apps/">View Project</a>
          </div>
          
        </div>
    </div>
  </div>
  

  {/* Project 4 */}
  <div className="col-md-3 col-lg-3">
    <div className={`items ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
      <div className="service-images">
        <img src={CrmImg} className="w-100" alt="Cloud CRM System" />
      </div>
      <div className="service-bodys">
        <div className="service-titles">
          <h3>Cloud CRM System</h3>
        </div>
        <div className="service-contents">
          <p>A custom cloud-based CRM solution to manage customer relationships, automate tasks, and improve productivity.</p>
          <a className="btn btn-primary" href="https://www.hubspot.com/products/crm" target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="text-center mt-5">
  <Link to="/projects" className="btn btn-outline-primary btn-lg">
    View All Projects <FaArrowRight className="ms-2" />
  </Link>
</div>
  </div>

</section>


{/* Blogs */}

<TestimonialSection />

<Footer/>
     
    
    </>
   
  )
}

export default Home