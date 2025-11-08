import React from 'react';
import { HiVideoCamera, HiDeviceMobile, HiBadgeCheck, HiCalendar, HiColorSwatch, HiBell } from 'react-icons/hi';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Random Video Chats',
      description: 'Meet new people seemlessly and safely from your university and around.',
      icon: HiVideoCamera
    },
    {
      title: 'Global & Campus feed.',
      description: 'Seperate Feeds for your own campus and campuses across the world.',
      icon: HiDeviceMobile
    },
    {
      title: 'Verified Users',
      description: 'Connect confidently with verified, authentic users on the platform.',
      icon: HiBadgeCheck
    },
    {
      title: 'Exclusive Events',
      description: 'Find all Exclusive Events around you in one hub.',
      icon: HiCalendar
    },
    {
      title: 'Customizable Profiles',
      description: 'Personalize your profile with themes, layouts, and settings.',
      icon: HiColorSwatch
    },
    {
      title: 'Smart Notifications',
      description: 'Get real-time alerts for the updates that matter to you.',
      icon: HiBell
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Discover Jointt Features</h2>
          <p className="features-subtitle">
            Explore Appit's powerful features designed to help you connect, share, and engage with your community effortlessly.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{React.createElement(feature.icon)}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

