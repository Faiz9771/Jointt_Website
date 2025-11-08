import React from 'react';
import { HiUserGroup, HiGlobeAlt, HiAcademicCap, HiSparkles } from 'react-icons/hi';
import mockupImage5 from '../assets/mockups/5.png';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      title: 'Authentic Connections',
      description: 'Build genuine relationships with like-minded individuals.',
      icon: HiUserGroup
    },
    {
      title: 'Global Reach',
      description: 'Connect with people across 50+ countries effortlessly.',
      icon: HiGlobeAlt
    },
    {
      title: 'Exclusivity',
      description: 'Just for university students all over the world.',
      icon: HiAcademicCap
    },
    {
      title: 'Premium Filters',
      description: 'Find your exact tribe, with advance filters for premium users.',
      icon: HiSparkles
    }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">Discover Jointt's Benefits</h2>
          <p className="benefits-subtitle">
            Unlock a world of meaningful connections, tailored experiences, and seamless social interaction.
          </p>
        </div>
        <div className="benefits-layout">
          <div className="benefit-card benefit-card-top">
            <div className="benefit-icon">{React.createElement(benefits[0].icon)}</div>
            <h3 className="benefit-title">{benefits[0].title}</h3>
            <p className="benefit-description">{benefits[0].description}</p>
          </div>
          <div className="benefit-card benefit-card-right">
            <div className="benefit-icon">{React.createElement(benefits[1].icon)}</div>
            <h3 className="benefit-title">{benefits[1].title}</h3>
            <p className="benefit-description">{benefits[1].description}</p>
          </div>
          <div className="benefits-image">
            <div className="mockup-image-wrapper">
              <img src={mockupImage5} alt="App Mockup" />
            </div>
          </div>
          <div className="benefit-card benefit-card-left">
            <div className="benefit-icon">{React.createElement(benefits[2].icon)}</div>
            <h3 className="benefit-title">{benefits[2].title}</h3>
            <p className="benefit-description">{benefits[2].description}</p>
          </div>
          <div className="benefit-card benefit-card-bottom">
            <div className="benefit-icon">{React.createElement(benefits[3].icon)}</div>
            <h3 className="benefit-title">{benefits[3].title}</h3>
            <p className="benefit-description">{benefits[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

