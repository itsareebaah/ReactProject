import React, { useEffect, useState } from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Office",
      details: "123 Innovation Drive, Tech Valley, CA 94000, United States"
    },
    {
      icon: FaPhone,
      title: "Phone Number",
      details: "+1 (555) 123-4567"
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      details: "areeba@gmail.com"
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM PST"
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaGithub, url: "#", label: "GitHub" }
  ];

  const services = [
    "Custom Software Development",
    "Web & Mobile App Development",
    "Cloud Solutions & DevOps",
    "UI/UX Design & Branding",
    "E-Commerce Solutions",
    "Digital Transformation",
    "Other"
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
                <span className="hero-badge">Get In Touch</span>
                <h1 className="hero-title">Let's Build Something Amazing Together</h1>
                <p className="hero-description">
                  Ready to start your next project? We'd love to hear from you. 
                  Get in touch with us and let's discuss how we can help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section py-5">
        <div className="container">
          <div className="row">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className={`contact-info-card ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="info-icon">
                    <info.icon />
                  </div>
                  <h4>{info.title}</h4>
                  <p>{info.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section py-5">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8 mb-5">
              <div className={`contact-form-container ${isVisible ? 'fade-in-left' : ''}`}>
                <h2 className="section-title">Send Us a Message</h2>
                <p className="section-description">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
                    <button type="button" className="btn-close" onClick={() => setSubmitStatus(null)}></button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="company" className="form-label">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="service" className="form-label">Service of Interest</label>
                    <select
                      className="form-select"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Project Details *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div className="col-lg-4">
              <div className={`contact-details ${isVisible ? 'fade-in-right' : ''}`}>
                <h3 className="details-title">Let's Connect</h3>
                <p className="details-description">
                  We're always excited to hear about new projects and opportunities. 
                  Reach out to us and let's start a conversation about how we can help your business grow.
                </p>
                
                <div className="social-links">
                  <h5>Follow Us</h5>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="social-link"
                        aria-label={social.label}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="quick-contact">
                  <h5>Quick Contact</h5>
                  <p>For urgent matters, you can call us directly:</p>
                  <a href="tel:+15551234567" className="phone-link">
                    <FaPhone className="me-2" />
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Find Us</h2>
            <p className="section-description">Visit our office or schedule a virtual meeting</p>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <FaMapMarkerAlt className="map-icon" />
                <h4>Our Office Location</h4>
                <p>123 Innovation Drive, Tech Valley, CA 94000</p>
                <p>United States</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">Get answers to common questions about working with us</p>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className={`faq-item ${isVisible ? 'fade-in' : ''}`}>
                <h5>What is your typical project timeline?</h5>
                <p>Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`faq-item ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                <h5>Do you provide ongoing support after launch?</h5>
                <p>Yes! We offer various support and maintenance packages to ensure your solution continues to perform optimally. This includes updates, security patches, and feature enhancements.</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`faq-item ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                <h5>What technologies do you specialize in?</h5>
                <p>We work with modern technologies including React, Node.js, Python, AWS, and more. We choose the best tech stack for each project based on requirements, scalability needs, and long-term maintenance.</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`faq-item ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                <h5>How do you handle project communication?</h5>
                <p>We maintain transparent communication through regular updates, progress reports, and scheduled meetings. We use project management tools to keep you informed every step of the way.</p>
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
                <p>Don't wait to bring your ideas to life. Contact us today and let's discuss how we can help you achieve your goals.</p>
                <div className="cta-buttons">
                  <a href="#contact-form" className="btn btn-primary">Start Your Project</a>
                  <a href="/services" className="btn btn-outline-primary">View Our Services</a>
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

export default ContactUs;

