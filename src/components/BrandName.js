import React from 'react';
import Socials from './Socials';
import './BrandName.css';

function Body() {
  return (
    <div className="title-name-container">
      <div className="brand">
        <h1>WHOTHEFXCKISB<div className="bar-container">
          <div className="first-bar" style={{animationDelay: '0s'}}></div>
          <div className="middle-bar bar" style={{animationDelay: '0.5s'}}></div>
          <div className="bar" style={{animationDelay: '1s'}}></div>
        </div>Y</h1>
        <Socials />
      </div>
    </div>
  );
}

export default Body;
