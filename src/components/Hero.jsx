import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import appStoreLogo from '../assets/appstore.png';
import playStoreLogo from '../assets/playstore.png';
import mockupImage from '../assets/mockups/1.png';
import mockupImage2 from '../assets/mockups/2.png';
import mockupImage3 from '../assets/mockups/3.png';
import './Hero.css';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgesRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isTitleInView = useInView(titleRef, { once: true, margin: '-50px' });
  const isSubtitleInView = useInView(subtitleRef, { once: true, margin: '-50px' });
  const isBadgesInView = useInView(badgesRef, { once: true, margin: '-50px' });
  const isMockupLeftInView = useInView(mockupLeftRef, { once: true, margin: '-200px' });
  const isMockupRightInView = useInView(mockupRightRef, { once: true, margin: '-200px' });

  // Scroll-based parallax effects with smooth easing
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
    layoutEffect: false
  });

  // Smoother parallax with easing curves - using cubic bezier for natural motion
  const mockupLeftY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, -30, -70, -100],
    { clamp: false }
  );
  const mockupRightY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, -30, -70, -100],
    { clamp: false }
  );
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 15, 30],
    { clamp: false }
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [1, 1, 0.6, 0.3],
    { clamp: false }
  );
  
  // Scale effects for depth
  const mockupLeftScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.95],
    { clamp: false }
  );
  const mockupRightScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.95],
    { clamp: false }
  );

  // Combine CSS translateY(-50%) with parallax effect
  const mockupLeftTransform = useMotionTemplate`translateY(calc(-50% + ${mockupLeftY}px)) scale(${mockupLeftScale})`;
  const mockupRightTransform = useMotionTemplate`translateY(calc(-50% + ${mockupRightY}px)) scale(${mockupRightScale})`;

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div 
        className="hero-container"
      >
          <motion.div 
            className="mockup-left-wrapper"
            ref={mockupLeftRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMockupLeftInView ? { 
              opacity: 0.9, 
              scale: 1,
              transition: { 
                duration: 1.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
              }
            } : {}}
            style={{ 
              transform: mockupLeftTransform,
              filter: 'blur(0px)',
              willChange: 'transform'
            }}
          >
            <img src={mockupImage2} alt="App Mockup 2" className="mockup-left" />
          </motion.div>
          
          <motion.div 
            className="mockup-right-wrapper"
            ref={mockupRightRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMockupRightInView ? { 
              opacity: 0.9, 
              scale: 1,
              transition: { 
                duration: 1.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
              }
            } : {}}
            style={{ 
              transform: mockupRightTransform,
              filter: 'blur(0px)',
              willChange: 'transform'
            }}
          >
            <img src={mockupImage3} alt="App Mockup 3" className="mockup-right" />
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            ref={titleRef}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isTitleInView ? { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 1, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1
              }
            } : {}}
            style={{ 
              y: titleY,
              willChange: 'transform, opacity'
            }}
          >
            University Off-Script.
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isSubtitleInView ? { 
              opacity: 0.8, 
              y: 0,
              transition: { 
                duration: 1, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3
              }
            } : {}}
            style={{ willChange: 'transform, opacity' }}
          >
            Download Jointt and connect with university students worldwide. Build authentic relationships and find your tribe.
          </motion.p>
          
          <motion.div 
            className="app-badges"
            ref={badgesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isBadgesInView ? { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5
              }
            } : {}}
          >
            <p className="app-badges-text">App Available Soon on</p>
            <div className="badges">
              <motion.div 
                className="badge-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isBadgesInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.5, 
                    delay: 0.7
                  }
                } : {}}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={appStoreLogo} alt="App Store" className="badge-logo" />
                <span className="badge-text">App Store</span>
              </motion.div>
              <motion.div 
                className="badge-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isBadgesInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.5, 
                    delay: 0.8
                  }
                } : {}}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={playStoreLogo} alt="Google Play" className="badge-logo" />
                <span className="badge-text">Google Play</span>
              </motion.div>
            </div>
          </motion.div>
          <div 
            className="mockup-container"
          >
            <div className="mockup-wrapper">
              <img 
                src={mockupImage} 
                alt="App Mockup" 
                className="mockup-image"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;

