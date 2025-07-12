import React from 'react';
import Hero from '../components/Hero';
import OverlappingCards from '../components/OverlappingCards';
import AboutSection from '../components/AboutSection';
import ServicesOverview from '../components/ServicesOverview';
import WorldMap from '../components/WorldMap';

const Home = () => {
  return (
    <div>
      <Hero />
      <OverlappingCards />
      <AboutSection />
      <ServicesOverview />
      <WorldMap />
    </div>
  );
};

export default Home;