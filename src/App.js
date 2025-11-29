import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import AdditionalServices from './components/AdditionalServices';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Products />
      <AdditionalServices />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
