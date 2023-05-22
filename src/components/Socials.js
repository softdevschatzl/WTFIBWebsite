import React from 'react';
import './Socials.css';
import Beatstars from "../images/beatstarslogo.png";
import Tiktok from "../images/tiktoklogo.png";
import Instagram from "../images/instagramlogo.png";

function Socials() {
  return (
    <div className="navbar">
      <div className="nav-item">
        <a href="https://whothefuckisbilly.beatstars.com/" target="_blank">
          <img className="social-image" src={Beatstars} alt="Beatstars" />
        </a>
      </div>
      <div className="nav-item">
        <a href="https://www.tiktok.com/@whothefuckisbilly" target="_blank">
          <img className="social-image" src={Tiktok} alt="Tiktok" />
        </a>
      </div>
      <div className="nav-item">
        <a href="https://www.instagram.com/prodby.wtfib/" target="_blank">
          <img className="social-image" src={Instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
