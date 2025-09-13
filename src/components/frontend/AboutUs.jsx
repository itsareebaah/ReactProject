import React, { useEffect, useState } from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import AboutImg from '../../assets/images/aboutus.jpg?url';
import TeamImg from '../../assets/images/team.jpg?url';
import TeamImg1 from '../../assets/images/dev.jpg?url';
import TeamImg2 from '../../assets/images/ui.jpg?url';
import TeamImg3 from '../../assets/images/web.jpg?url';
import P1 from '../../assets/images/p1.jpg?url';
import P2 from '../../assets/images/p2.jpg?url';
import P3 from '../../assets/images/p3.jpg?url';
import { FaUsers, FaLightbulb, FaRocket, FaHeart, FaAward, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: P2,
      description: "Full-stack developer with 8+ years of experience in modern web technologies."
    },
    {
      name: "Mike Chen",
      role: "UI/UX Designer",
      image: P1,
      description: "Creative designer passionate about creating intuitive and beautiful user experiences."
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      image: P3,
      description: "Experienced project manager ensuring smooth delivery and client satisfaction."
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: FaRocket },
    { number: "50+", label: "Happy Clients", icon: FaHeart },
    { number: "8+", label: "Years Experience", icon: FaAward },
    { number: "24/7", label: "Support", icon: FaHandshake }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className={`hero-content ${isVisible ? 'fade-in-left' : ''}`}>
                <span className="hero-badge">About Codeware Digital</span>
                <h1 className="hero-title">We're a team of passionate innovators</h1>
                <p className="hero-description">
                  Dedicated to transforming businesses through cutting-edge digital solutions. 
                  Our mission is to make technology work for you, not against you.
                </p>
                <div className="hero-buttons">
                  <a href="#our-story" className="btn btn-primary">Learn More</a>
                  <a href="/contact" className="btn btn-outline-primary">Get in Touch</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`hero-image ${isVisible ? 'fade-in-right' : ''}`}>
                <img src={TeamImg} alt="About Us" className="img-fluid rounded-4 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div className={`stat-card ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="story-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={`story-content ${isVisible ? 'fade-in-left' : ''}`}>
                <span className="section-badge">Our Story</span>
                <h2 className="section-title">From startup to industry leader</h2>
                <p className="story-text">
                  Founded in 2016, Codeware Digital began as a small team of passionate developers 
                  with a vision to democratize technology for businesses of all sizes. What started 
                  as a garage project has grown into a full-service digital agency.
                </p>
                <p className="story-text">
                  Today, we're proud to serve clients across multiple industries, from healthcare 
                  to e-commerce, helping them navigate the digital landscape with confidence and innovation.
                </p>
                <div className="story-features">
                  <div className="feature-item">
                    <FaLightbulb className="feature-icon" />
                    <span>Innovation First</span>
                  </div>
                  <div className="feature-item">
                    <FaUsers className="feature-icon" />
                    <span>Client Focused</span>
                  </div>
                  <div className="feature-item">
                    <FaRocket className="feature-icon" />
                    <span>Results Driven</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`story-image ${isVisible ? 'fade-in-right' : ''}`}>
                <div className="image-grid">
                  <div className="grid-item">
                    <img src={TeamImg1} alt="Team Member" className="img-fluid rounded-3" />
                  </div>
                  <div className="grid-item">
                    <img src={TeamImg2} alt="Team Member" className="img-fluid rounded-3" />
                  </div>
                  <div className="grid-item">
                    <img src={TeamImg3} alt="Team Member" className="img-fluid rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">Meet the experts behind our success</h2>
            <p className="section-description">
              Our diverse team brings together expertise from various domains to deliver 
              comprehensive solutions that exceed expectations.
            </p>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className={`team-card ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="member-image">
                    <img src={member.image} alt={member.name} className="img-fluid" />
                  </div>
                  <div className="member-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <p className="member-description">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">What drives us forward</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`value-card ${isVisible ? 'fade-in' : ''}`}>
                <div className="value-icon">
                  <FaUsers />
                </div>
                <h4>Collaboration</h4>
                <p>We believe in the power of teamwork and collaboration to achieve extraordinary results.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`value-card ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className="value-icon">
                  <FaLightbulb />
                </div>
                <h4>Innovation</h4>
                <p>Constantly pushing boundaries and exploring new technologies to stay ahead of the curve.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`value-card ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="value-icon">
                  <FaHeart />
                </div>
                <h4>Passion</h4>
                <p>We're passionate about what the work we do and it shows in every single project we deliver.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`value-card ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                <div className="value-icon">
                  <FaAward />
                </div>
                <h4>Excellence</h4>
                <p>Committed to delivering excellence in every aspect of our work and client relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;

