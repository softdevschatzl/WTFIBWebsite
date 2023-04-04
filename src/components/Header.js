import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="title-name-container">
        <div className="bar-container">
          <div className="bar" style={{animationDelay: '0s'}}></div>
          <div className="middle-bar bar" style={{animationDelay: '0.5s'}}></div> {/* Add middle-bar class */}
          <div className="bar" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="brand">
          <h1>TFIB</h1>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#mixing">Mixing</a></li>
          <li><a href="#mastering">Mastering</a></li>
          <li><a href="#beats">Beats</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
