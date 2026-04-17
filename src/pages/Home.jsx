import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import QuickPurchase from '../components/QuickPurchase';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <QuickPurchase />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
