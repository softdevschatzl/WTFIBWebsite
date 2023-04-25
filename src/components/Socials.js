import React from 'react';
import './Socials.css';
import Beatstars from "../images/beatstarslogo.png";
import Tiktok from "../images/tiktoklogo.png";
import Instagram from "../images/instagramlogo.png";

function Socials() {
  return (
    <div className="navbar">
      <div className="nav-item">
        <img className="social-image" src={Beatstars} alt="Beatstars" />
      </div>
      <div className="nav-item">
        <img className="social-image" src={Tiktok} alt="Tiktok" />
      </div>
      <div className="nav-item">
        <img className="social-image" src={Instagram} alt="Instagram" />
      </div>
    </div>
  );
}

export default Socials;
