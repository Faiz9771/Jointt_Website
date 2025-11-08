import React from 'react';
import { AuroraBackground } from './ui/aurora-background';
import appStoreLogo from '../assets/appstore.png';
import playStoreLogo from '../assets/playstore.png';
import mockupImage from '../assets/mockups/1.png';
import mockupImage2 from '../assets/mockups/2.png';
import mockupImage3 from '../assets/mockups/3.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <AuroraBackground>
        <div className="hero-container">
          <div className="mockup-left-wrapper">
            <img src={mockupImage2} alt="App Mockup 2" className="mockup-left" />
          </div>
          <div className="mockup-right-wrapper">
            <img src={mockupImage3} alt="App Mockup 3" className="mockup-right" />
          </div>
          <h1 className="hero-title">University Off-Script.</h1>
          <p className="hero-subtitle">
            Download Jointt and connect with university students worldwide. Build authentic relationships and find your tribe.
          </p>
          <div className="app-badges">
            <p className="app-badges-text">App Available Soon on</p>
            <div className="badges">
              <div className="badge-container">
                <img src={appStoreLogo} alt="App Store" className="badge-logo" />
                <span className="badge-text">App Store</span>
              </div>
              <div className="badge-container">
                <img src={playStoreLogo} alt="Google Play" className="badge-logo" />
                <span className="badge-text">Google Play</span>
              </div>
            </div>
            <div className="mockup-container">
              <div className="mockup-wrapper">
                <img src={mockupImage} alt="App Mockup" className="mockup-image" />
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;

