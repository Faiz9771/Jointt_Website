import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  const sections = [
    {
      title: 'Overview',
      content: [
        'Jointt is a social platform built around spontaneous human connection, not surveillance.',
        'Our systems are designed to minimize data collection and maximize user privacy.',
        'We comply with the Digital Personal Data Protection Act (DPDPA) 2023, GDPR, and other international standards.'
      ]
    },
    {
      title: 'Information We Collect',
      content: [
        'We collect only what\'s essential to run the app and improve your experience:',
        '• Basic account details — email ID or mobile number (for authentication)',
        '• Optional profile inputs — name, avatar, age range, city or campus',
        '• Session data — timestamps, connection logs, and app version (for stability & troubleshooting)',
        '• Device data — OS type, device model, network strength (for performance optimization)',
        '• No background microphone, camera, or contact access — ever'
      ]
    },
    {
      title: 'What We Don\'t Collect',
      content: [
        '• We do not record, store, or monitor video calls.',
        '• We do not sell or share your personal data with third parties for advertising.',
        '• We do not track your location continuously — only your voluntary city/campus tag is used for context.',
        '• We do not use hidden analytics or fingerprinting tools.'
      ]
    },
    {
      title: 'How We Use Your Data',
      content: [
        'We use the limited data we collect to:',
        '• Enable real-time video matching and feeds',
        '• Detect and prevent abuse or misuse',
        '• Improve app performance and experience',
        '• Notify you about invites, access drops, or updates',
        'All processing happens under consent and minimal necessity principles — you can opt out anytime.'
      ]
    },
    {
      title: 'How "The Meet" & Smart Matching Stay Private',
      content: [
        '• End-to-end encryption: Every video session is encrypted during transmission.',
        '• No recording or storage: Once a session ends, it\'s gone.',
        '• Anonymous smart matching: Matching uses general activity patterns and tags, not personal identifiers.',
        '• Ephemeral data: Session details auto-delete after short retention for moderation safety.'
      ]
    },
    {
      title: 'User Controls',
      content: [
        'You have full control over your data and experience:',
        '• Edit or delete your profile anytime',
        '• Report, block, or exit any interaction instantly',
        '• Request complete data deletion via in-app settings',
        '• Manage notifications, camera/mic permissions, and discoverability'
      ]
    },
    {
      title: 'Data Storage & Security',
      content: [
        '• Hosted on secure, encrypted cloud infrastructure (e.g., AWS / GCP) with restricted access.',
        '• Data in transit and at rest is AES-256 encrypted.',
        '• Regular security audits and DPDPA-compliant storage practices.',
        '• No cross-border data transfers without explicit consent.'
      ]
    },
    {
      title: 'Compliance & Legal',
      content: [
        '• Fully aligned with India\'s DPDPA 2023, including consent, purpose limitation, and user rights.',
        '• Respectful of global privacy frameworks like GDPR (EU) and CCPA (US).',
        '• Designated Data Protection Officer (DPO) will handle privacy requests at:',
        '📩 jointt.work@gmail.com'
      ]
    },
    {
      title: 'Policy Updates',
      content: [
        'We may occasionally update this policy to reflect changes in law or features.',
        'Whenever we do, we\'ll notify all users clearly within the app before new terms apply.'
      ]
    },
    {
      title: 'Contact Us',
      content: [
        'For privacy or data-related queries:',
        '📩 jointt.work@gmail.com',
        '📍 Jointt HQ — Pune, Maharashtra, India',
        '',
        'If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at jointt.work@gmail.com'
      ]
    }
  ];

  return (
    <section id="privacy-policy" className="privacy-policy">
      <div className="privacy-policy-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="privacy-header"
        >
          <div className="privacy-icon"><LockOutlinedIcon /></div>
          <h1 className="privacy-title">Our Privacy Policy</h1>
          <p className="privacy-intro">
            Our Privacy Policy outlines how we collect, use, and protect your personal information. 
            Your privacy and security are our priorities.
          </p>
          <div className="privacy-date">
            <span className="date-icon"><CalendarTodayOutlinedIcon /></span>
            <span>Last Updated on October 24, 2024</span>
          </div>
        </motion.div>

        <div className="privacy-divider">⸻</div>

        <div className="privacy-sections">
          {sections.map((section, index) => (
            <PrivacySection 
              key={index} 
              section={section} 
              index={index} 
              isLast={index === sections.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PrivacySection = ({ section, index, isLast }) => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="privacy-section"
    >
      <h2 className="section-title">{section.title}</h2>
      <div className="section-content">
        {section.content.map((item, itemIndex) => (
          <p key={itemIndex} className="section-text">
            {item}
          </p>
        ))}
      </div>
      {!isLast && <div className="section-divider">⸻</div>}
    </motion.div>
  );
};

export default PrivacyPolicy;

