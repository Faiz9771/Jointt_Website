import React from 'react';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import mockupImage4 from '../assets/mockups/4..png';
import './AdvancedCapabilities.css';

const AdvancedCapabilities = () => {
  const capabilities = [
    {
      title: 'Instant Messaging',
      description: 'Chat seamlessly ',
      icon: MessageOutlinedIcon
    },
    {
      title: 'Ai Call Assistant',
      description: 'AI Call Assistance for smoother conversations. ',
      icon: SmartToyOutlinedIcon
    },
    {
      title: 'Customizable Profiles',
      description: 'Personalize your profile ',
      icon: PersonOutlineOutlinedIcon
    }
  ];

  return (
    <section className="advanced-capabilities">
      <div className="capabilities-container">
        <div className="capabilities-layout">
          <div className="capabilities-image">
            <div className="mockup-image-wrapper">
              <img src={mockupImage4} alt="App Mockup" />
            </div>
          </div>
          <div className="capabilities-content">
            <h2 className="capabilities-title">Jointt's Advanced Capabilities</h2>
            <div className="capabilities-cards">
            <div className="capability-card">
              <div className="capability-icon">{React.createElement(capabilities[0].icon)}</div>
              <h3 className="capability-title">{capabilities[0].title}</h3>
              <p className="capability-description">{capabilities[0].description}</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">{React.createElement(capabilities[1].icon)}</div>
              <h3 className="capability-title">{capabilities[1].title}</h3>
              <p className="capability-description">{capabilities[1].description}</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">{React.createElement(capabilities[2].icon)}</div>
              <h3 className="capability-title">{capabilities[2].title}</h3>
              <p className="capability-description">{capabilities[2].description}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedCapabilities;

