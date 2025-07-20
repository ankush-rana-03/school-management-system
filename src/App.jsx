import React from 'react';
import MyNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <FeaturesSection /> 
      <AboutUs />
      <Footer />
       
      {/* Baaki content */}
    </>
  );
}

export default App;