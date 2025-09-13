import React, { useEffect, useState } from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaMobile, FaDesktop, FaCloud, FaDatabase } from 'react-icons/fa';
import EcomImg from '../../assets/images/Ecom.jpg?url';
import AiDashboardImg from '../../assets/images/Air.jpg?url';
import HealthImg from '../../assets/images/health.jpg?url';
import CrmImg from '../../assets/images/cloud.jpg?url';
import WebImg from '../../assets/images/web.jpg?url';
import UIImg from '../../assets/images/ui.jpg?url';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: EcomImg,
      description: "A full-featured e-commerce solution with secure payment integration, inventory management, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://www.victorialinen.co.uk/",
      githubUrl: "#",
      features: ["Secure Payment", "Inventory Management", "Admin Dashboard", "Mobile Responsive"]
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      category: "ai",
      image: AiDashboardImg,
      description: "Intelligent dashboard providing real-time data insights and predictive analytics for business decision making.",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      liveUrl: "https://www.tableau.com/",
      githubUrl: "#",
      features: ["Real-time Analytics", "Predictive Models", "Interactive Charts", "Data Export"]
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      category: "mobile",
      image: HealthImg,
      description: "Patient-friendly mobile application for booking appointments, tracking health data, and connecting with doctors.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      liveUrl: "https://scopicsoftware.com/web-development/health-and-fitness-apps/",
      githubUrl: "#",
      features: ["Appointment Booking", "Health Tracking", "Doctor Connect", "Push Notifications"]
    },
    {
      id: 4,
      title: "Cloud CRM System",
      category: "web",
      image: CrmImg,
      description: "Custom cloud-based CRM solution to manage customer relationships, automate tasks, and improve productivity.",
      technologies: ["Vue.js", "AWS", "PostgreSQL", "Redis"],
      liveUrl: "https://www.hubspot.com/products/crm",
      githubUrl: "#",
      features: ["Customer Management", "Task Automation", "Sales Pipeline", "Reporting"]
    },
    {
      id: 5,
      title: "Modern Web Application",
      category: "web",
      image: WebImg,
      description: "Scalable web application with modern architecture, real-time features, and excellent user experience.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time Updates", "Progressive Web App", "SEO Optimized", "Performance Focused"]
    },
    {
      id: 6,
      title: "UI/UX Design System",
      category: "design",
      image: UIImg,
      description: "Comprehensive design system with reusable components, consistent branding, and accessibility features.",
      technologies: ["Figma", "Storybook", "CSS-in-JS", "Accessibility"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Component Library", "Design Tokens", "Accessibility", "Documentation"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaEye },
    { id: 'web', name: 'Web Apps', icon: FaDesktop },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile },
    { id: 'ai', name: 'AI/ML', icon: FaCode },
    { id: 'design', name: 'UI/UX', icon: FaDatabase }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
                <span className="hero-badge">Our Portfolio</span>
                <h1 className="hero-title">Showcasing Our Best Work</h1>
                <p className="hero-description">
                  Explore our diverse portfolio of successful projects that demonstrate our expertise 
                  in creating innovative digital solutions across various industries and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section py-4">
        <div className="container">
          <div className="filter-buttons text-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <category.icon className="filter-icon" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid py-5">
        <div className="container">
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="col-lg-6 col-xl-4 mb-4">
                <div className={`project-card ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} className="img-fluid" />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaExternalLinkAlt />
                        </a>
                        <a href={project.githubUrl} className="project-link">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-features">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <span key={featureIndex} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <section className="process-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Our Process</span>
            <h2 className="section-title">How We Bring Ideas to Life</h2>
            <p className="section-description">
              Our proven development process ensures quality, transparency, and successful project delivery.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`process-step ${isVisible ? 'fade-in' : ''}`}>
                <div className="step-number">01</div>
                <h4>Discovery</h4>
                <p>Understanding your requirements, goals, and vision for the project.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`process-step ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className="step-number">02</div>
                <h4>Planning</h4>
                <p>Creating detailed project roadmap, architecture, and timeline.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`process-step ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="step-number">03</div>
                <h4>Development</h4>
                <p>Building your solution with clean code and best practices.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`process-step ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                <div className="step-number">04</div>
                <h4>Launch</h4>
                <p>Deploying and maintaining your solution for optimal performance.</p>
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
                <h2>Ready to Start Your Project?</h2>
                <p>Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.</p>
                <div className="cta-buttons">
                  <a href="/contact" className="btn btn-primary">Get Started</a>
                  <a href="/services" className="btn btn-outline-primary">View Services</a>
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

export default Projects;

