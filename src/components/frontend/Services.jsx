import React, { useEffect, useState } from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { FaCode, FaMobile, FaCloud, FaPalette, FaRocket, FaLock, FaUsers, FaChartLine, FaCog, FaDatabase, FaSearch, FaLaptop } from 'react-icons/fa';
import ServiceImg from '../../assets/images/custom.jpg?url';
import WebImg from '../../assets/images/web.jpg?url';
import DevImg from '../../assets/images/dev.jpg?url';
import UIImg from '../../assets/images/ui.jpg?url';
import EcomImg from '../../assets/images/Ecom.jpg?url';
import HealthImg from '../../assets/images/health.jpg?url';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      icon: FaCode,
      image: ServiceImg,
      description: "Tailored software solutions designed to solve your specific business challenges and improve operational efficiency.",
      features: [
        "Requirements Analysis & Planning",
        "Custom Application Development",
        "Database Design & Management",
        "API Development & Integration",
        "Testing & Quality Assurance",
        "Deployment & Maintenance"
      ],
      technologies: ["React", "Node.js", "Python", "Java", "C#", "PostgreSQL", "MongoDB"],
      price: "Starting from $15,000"
    },
    {
      id: 2,
      title: "Web & Mobile App Development",
      icon: FaMobile,
      image: WebImg,
      description: "Engaging, responsive, and user-friendly applications built with the latest technologies and best practices.",
      features: [
        "Responsive Web Design",
        "Progressive Web Apps",
        "Cross-platform Mobile Apps",
        "Native iOS & Android Development",
        "Performance Optimization",
        "App Store Deployment"
      ],
      technologies: ["React", "Vue.js", "React Native", "Flutter", "Swift", "Kotlin"],
      price: "Starting from $8,000"
    },
    {
      id: 3,
      title: "Scalable Cloud & DevOps Services",
      icon: FaCloud,
      image: DevImg,
      description: "Secure, scalable cloud-based solutions with DevOps practices to ensure seamless deployment and optimal performance.",
      features: [
        "Cloud Infrastructure Setup",
        "CI/CD Pipeline Development",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security & Compliance",
        "Cost Optimization"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"],
      price: "Starting from $12,000"
    },
    {
      id: 4,
      title: "UI/UX Design & Branding",
      icon: FaPalette,
      image: UIImg,
      description: "Beautiful, intuitive designs that provide your users with exceptional digital experiences and strengthen your brand identity.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "User Testing & Iteration",
        "Design System Creation",
        "Accessibility Compliance"
      ],
      technologies: ["Figma", "Sketch", "Adobe Creative Suite", "InVision", "Principle"],
      price: "Starting from $6,000"
    },
    {
      id: 5,
      title: "E-Commerce Solutions",
      icon: FaRocket,
      image: EcomImg,
      description: "Complete e-commerce platforms that drive sales, enhance customer experience, and streamline business operations.",
      features: [
        "Online Store Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing System",
        "Customer Analytics",
        "Multi-platform Integration"
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Square"],
      price: "Starting from $10,000"
    },
    {
      id: 6,
      title: "Digital Transformation",
      icon: FaChartLine,
      image: HealthImg,
      description: "Strategic guidance and implementation to modernize your business processes and leverage digital technologies effectively.",
      features: [
        "Digital Strategy Planning",
        "Process Automation",
        "Legacy System Migration",
        "Change Management",
        "Performance Monitoring",
        "Continuous Improvement"
      ],
      technologies: ["Analytics", "AI/ML", "Integration",  "Big Data", "Python","IoT", "RPA"],
      price: "Starting from $25,000"
    }
  ];

  const additionalServices = [
    {
      title: "Technical Consulting",
      icon: FaUsers,
      description: "Expert guidance on technology decisions, architecture planning, and digital strategy."
    },
    {
      title: "Security Audits",
      icon: FaLock,
      description: "Comprehensive security assessments and vulnerability testing for your applications."
    },
    {
      title: "Performance Optimization",
      icon: FaCog,
      description: "Speed optimization, scalability improvements, and performance monitoring solutions."
    },
    {
      title: "Data Analytics",
      icon: FaDatabase,
      description: "Business intelligence, data visualization, and actionable insights from your data."
    },
    {
      title: "SEO & Marketing",
      icon: FaSearch,
      description: "Search engine optimization and digital marketing strategies to increase online visibility."
    },
    {
      title: "Training & Support",
      icon: FaLaptop,
      description: "Comprehensive training programs and ongoing technical support for your team."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
                <span className="hero-badge">Our Services</span>
                <h1 className="hero-title text-center">Comprehensive Digital Solutions</h1>
                <p className="hero-description text-center">
                  We offer a full spectrum of digital services to help your business grow, from custom software development to digital transformation strategies 
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
     <section className="services-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">We Build Digital Solutions for Your Business</h2>
          <p className="section-description">From idea to execution, we provide innovative technology services that help your business grow and stay ahead in the digital world.</p>
        </div>

        <div className="services-grid">
          {services.map(service => {
            const Icon = service.icon;
            return (
              <div key={service.id} className={`service-card ${isVisible ? 'fade-in' : ''}`}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-body">
                  <div className="service-header">
                    <div className="service-icon"><Icon /></div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feat, i) => (
                      <span key={i} className="feature-tag">{feat}</span>
                    ))}
                  </div>
                  <div className="service-technologies">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="service-price">{service.price}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

      {/* Service Detail Modal */}
      {activeService !== null && (
        <div className="service-modal-overlay" onClick={() => setActiveService(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{services[activeService].title}</h3>
              <button className="close-btn" onClick={() => setActiveService(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img src={services[activeService].image} alt={services[activeService].title} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                  <p className="modal-description">{services[activeService].description}</p>
                  <h5>Key Features:</h5>
                  <ul className="feature-list">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <h5>Technologies:</h5>
                  <div className="tech-tags">
                    {services[activeService].technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="price-info">
                    <strong>{services[activeService].price}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Services Section */}
      <section className="additional-services py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Additional Services</span>
            <h2 className="section-title">Specialized Solutions for Your Needs</h2>
            <p className="section-description">
              Beyond our core services, we offer specialized solutions to address specific 
              business challenges and requirements.
            </p>
          </div>
          <div className="row">
            {additionalServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className={`additional-service-card ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="service-icon">
                    <service.icon />
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="why-choose-services py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">Excellence in Every Service</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`benefit-card ${isVisible ? 'slide-up' : ''}`}>
                <div className="benefit-icon">
                  <FaUsers />
                </div>
                <h4>Expert Team</h4>
                <p>Experienced professionals with deep expertise in their respective domains.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`benefit-card ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className="benefit-icon">
                  <FaLock />
                </div>
                <h4>Quality Assurance</h4>
                <p>Rigorous testing and quality control processes ensure reliable solutions.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`benefit-card ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="benefit-icon">
                  <FaRocket />
                </div>
                <h4>Fast Delivery</h4>
                <p>Efficient project management and agile methodologies for timely delivery.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`benefit-card ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
                <div className="benefit-icon">
                  <FaChartLine />
                </div>
                <h4>Ongoing Support</h4>
                <p>Continuous support and maintenance to ensure your solutions evolve with your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className={`cta-content ${isVisible ? 'fade-in' : ''}`}>
                <h2>Ready to Get Started?</h2>
                <p>Let's discuss your project requirements and find the perfect solution for your business needs.</p>
                <div className="cta-buttons">
                  <a href="/contact" className="btn btn-primary">Get Free Consultation</a>
                  <a href="/projects" className="btn btn-outline-primary">View Our Work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
