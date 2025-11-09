import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import AdvancedCapabilities from '../components/AdvancedCapabilities';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <AdvancedCapabilities />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;

