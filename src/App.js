import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js'
import BrandName from './components/BrandName.js'
import WTFIBeats from './components/Beats.js';
import Pricing from './components/Pricing.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';

function App() {
  
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Header cart={cart} />
      <BrandName />
      <WTFIBeats setCart={setCart} clearCart={clearCart} />
      <Pricing />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
