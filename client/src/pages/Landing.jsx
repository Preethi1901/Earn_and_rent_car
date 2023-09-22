import React from 'react';
import Navbar from '../pages/Navbar';
import Home1 from '../pages/Home1';
import About from '../pages/About';
import Footer from '../pages/Footer';
import Services from '../pages/Services';
import Guidelines from '../pages/Guidelines';

function Landing() {

  return (
    <>
      <Navbar/>
      <Home1/>
      <About/>
      <Services/>
      <Guidelines/>
      <Footer/>
      
    </>
  );
}

export default Landing;
