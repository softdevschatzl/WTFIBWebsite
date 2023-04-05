import React from 'react';
import './Header.css';
import WTFLogo from '../images/WTFlogo.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <img className="logo" src={WTFLogo} alt = "WTFLogo"></img>
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
