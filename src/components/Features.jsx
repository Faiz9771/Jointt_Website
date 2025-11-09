import React from 'react';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Random Video Chats',
      description: 'Meet new people seemlessly and safely from your university and around.',
      icon: VideoCallOutlinedIcon
    },
    {
      title: 'Global & Campus feed.',
      description: 'Seperate Feeds for your own campus and campuses across the world.',
      icon: FeedOutlinedIcon
    },
    {
      title: 'Verified Users',
      description: 'Connect confidently with verified, authentic users on the platform.',
      icon: VerifiedOutlinedIcon
    },
    {
      title: 'Exclusive Events',
      description: 'Find all Exclusive Events around you in one hub.',
      icon: EventAvailableOutlinedIcon
    },
    {
      title: 'Customizable Profiles',
      description: 'Personalize your profile with themes, layouts, and settings.',
      icon: SettingsOutlinedIcon
    },
    {
      title: 'Smart Notifications',
      description: 'Get real-time alerts for the updates that matter to you.',
      icon: NotificationsActiveOutlinedIcon
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
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon"><IconComponent /></div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

