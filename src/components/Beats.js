import React from 'react';
import "./Beats.css";
import Cerberus from "../sound/Cerberus_188BPM.mp3";
import H20 from "../sound/H20_194BPM.mp3";
import Manic from "../sound/Manic_182BPM.mp3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function WTFIBeats({ setCart }) {

  const addToCart = (beatName) => {
    const beat = {
      name: beatName,
      price: 20,
    };
    setCart((prevCart) => [...prevCart, beat]);
  };

  return (
    <div className ='beats'>
      <div className='beat-info-container'>
        <div className='disclaimer'>
          <h3>Disclaimer:</h3>
          <p>Some of these beats can be downloaded for free, personal use only.
            For monetization, beats can be licensed individually or in bundles
            for the corresponding price.
          </p>
        </div>
        <ul className ='audio-section'>
          <h2>WTFIB Beats:</h2>
          <div className='beats-container'>
            <li className ='ind-beat'>
              <div className='audio-container'>
                <audio className='audio' src={Cerberus} controls></audio>
              </div>
              <p className='genre'>Cerberus - 188BPM</p>
              <button className="price" onClick={() => addToCart('Cerberus')}>
                <span className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="price-text">ADD</span>
              </button>
            </li>
            <li className='ind-beat'>
              <div className='audio-container'>
                <audio className='audio' src={H20} controls></audio>
              </div>
              <p className='genre'>H20 - 194BPM</p>
              <button className="price" onClick={() => addToCart('H20')}>
                <span className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="price-text">ADD</span>
              </button>
            </li>
            <li className='ind-beat'>
              <div className='audio-container'>
                <audio className='audio' src={Manic} controls></audio>
              </div>
              <p className='genre'>Manic - 182BPM</p>
              <button className="price" onClick={() => addToCart('Manic')}>
                <span className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="price-text">ADD</span>
              </button>
            </li>
          </div>
        </ul>
        <div className='disclaimer'>
          <h3>Special Offers:</h3>
          <p>
            All beat licenses are 20% off if you can upload proof
            that you don't have a fringe haircut!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WTFIBeats;
