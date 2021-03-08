import React from 'react';
import logo from './logo.svg';
import Hero from './components/Hero';
import Header from './components/Header';
import PinkBlock from './components/PinkBlock';
import Try from './components/Try';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div className="content">
      <Header />
      <Hero />
      <PinkBlock />
      <Features />
      <Testimonials />
      <hr />
      <Try />
      <Footer />
    </div>
  );
}

export default App;
