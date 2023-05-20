import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js'
import BrandName from './components/BrandName.js'
import WTFIBeats from './components/Beats';
import Pricing from './components/Pricing';
import Services from './components/Services';

function App() {
  
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Header cart={cart} />
      <BrandName />
      <WTFIBeats setCart={setCart} />
      <Pricing />
      <Services />
    </div>
  );
}

export default App;
