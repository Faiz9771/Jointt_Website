import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import logoImage from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logoImage} alt="Logo" className="footer-logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <span className="footer-logo-text" style={{display: 'none'}}>University Off-Script.</span>
          </div>
          <p className="footer-brand-text">University Off-Script.</p>
          <div className="footer-email-container">
            <a href="mailto:jointt.work@gmail.com" className="footer-email">jointt.work@gmail.com</a>
          </div>
        </div>
        {isHomePage && (
          <div className="footer-nav">
            <a href="#benefits" className="footer-nav-link">Benefits</a>
            <span className="footer-dot">•</span>
            <a href="#features" className="footer-nav-link">Features</a>
            <span className="footer-dot">•</span>
            <a href="#pricing" className="footer-nav-link">Pricing</a>
            <span className="footer-dot">•</span>
            <a href="#faq" className="footer-nav-link">FAQ's</a>
            <span className="footer-dot">•</span>
            <a href="#" className="footer-nav-link">Waitlist</a>
          </div>
        )}
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#" className="social-icon-button">
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon-button">
              <FaXTwitter />
            </a>
            <a href="#" className="social-icon-button">
              <FaInstagram />
            </a>
          </div>
          <Link to="/privacy-policy" className="footer-privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

