import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import emailjs from '@emailjs/browser';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { emailConfig, formspreeEndpoint } from '../config/emailConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './StayInTouch.css';

const StayInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize EmailJS with your public key
    if (emailConfig.publicKey && emailConfig.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(emailConfig.publicKey);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Option 1: Use Formspree (easiest - just need endpoint)
      if (formspreeEndpoint && formspreeEndpoint !== '') {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          return;
        }
      }

      // Option 2: Use EmailJS (if configured)
      if (emailConfig.serviceId && emailConfig.serviceId !== 'YOUR_SERVICE_ID') {
        const result = await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            message: formData.message,
            to_email: emailConfig.recipientEmail,
          }
        );

        if (result.text === 'OK') {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          return;
        }
      }

      // Fallback: Use mailto (opens email client)
      throw new Error('No email service configured');
    } catch (error) {
      console.error('Email Error:', error);
      // Fallback to mailto if services fail or not configured
      const subject = encodeURIComponent('Stay In Touch - Contact Form Submission');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${emailConfig.recipientEmail}?subject=${subject}&body=${body}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      <section className="stay-in-touch">
        <div className="stay-in-touch-container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="stay-in-touch-header"
          >
            <div className="contact-icon"><EmailOutlinedIcon /></div>
            <h1 className="stay-in-touch-title">Stay In Touch</h1>
            <p className="stay-in-touch-intro">
              Have questions or want to join our waitlist? We'd love to hear from you. 
              Fill out the form below and we'll get back to you soon.
            </p>
          </motion.div>

          <div className="contact-divider">⸻</div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="contact-form-wrapper"
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  ✓ Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error">
                  ✗ Something went wrong. Please try again or email us directly at jointt.work@gmail.com
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="contact-info">
              <div className="contact-info-item">
                <span className="info-icon"><MarkEmailReadOutlinedIcon /></span>
                <div>
                  <p className="info-label">Email</p>
                  <a href="mailto:jointt.work@gmail.com" className="info-value">
                    jointt.work@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="info-icon"><LocationOnOutlinedIcon /></span>
                <div>
                  <p className="info-label">Location</p>
                  <p className="info-value">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StayInTouch;

