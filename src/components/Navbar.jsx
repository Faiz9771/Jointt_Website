import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrollProgress, setScrollProgress] = useState(0);
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        // Calculate progress: 0 at top, 1 when hero is completely scrolled past
        const progress = Math.min(scrollPosition / heroHeight, 1);
        setScrollProgress(progress);
      } else {
        setScrollProgress(window.scrollY > 50 ? 1 : 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // Close mobile menu on scroll
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Calculate background opacity: starts at 0.1, gradually increases to 0.8 (more transparent)
  const bgOpacity = 0.1 + (scrollProgress * 0.7);

  return (
    <nav 
      className="navbar"
      style={{
        background: `rgba(0, 0, 0, ${bgOpacity})`
      }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {!logoError ? (
            <img 
              src={logoImage} 
              alt="Logo" 
              className="logo-img" 
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="logo-text">University Off-Script.</span>
          )}
        </Link>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        {isHomePage && (
          <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#benefits" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
            <a href="#features" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>FAQ's</a>
          </div>
        )}
        <div className={`navbar-cta-wrapper ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/stay-in-touch" className="navbar-cta" onClick={() => setMobileMenuOpen(false)}>
            Stay In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

