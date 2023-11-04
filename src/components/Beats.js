import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import "./Beats.css";
import Cerberus from "../sound/Cerberus_188BPM.mp3";
import H20 from "../sound/H20_194BPM.mp3";
import Manic from "../sound/Manic_182BPM.mp3";
import beatCover from "../images/beatcover.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import shareIcon from '../images/share-solid.svg';
import WaveSurfer from 'wavesurfer.js';
import fastForward from '../images/forward-solid.svg';
import play from '../images/play-solid.svg';
import pause from '../images/pause-solid.svg';
import rewind from '../images/backward-solid.svg';

function WTFIBeats({ setCart }) {

  const [currentBeat, setCurrentBeat] = useState(null);
  const waveSurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beats, setBeats] = useState([
    { name: 'Cerberus', path: Cerberus, bpm: 188, tags: ['BABYTRON', 'BLPKOSHER'], length: null },
    { name: 'H20', path: H20, bpm: 194, tags: ['BABYTRON'], length: null },
    { name: 'Manic', path: Manic, bpm: 182, tags: ['BABYTRON'], length: null },
  ]);

  beats.forEach(beat => {
    const audio = new Audio(beat.path);
    audio.onloadedmetadata = function() {
      beat.length = audio.duration;
    }
  })

  // For actually rendering the player.
  const [showPlayer, setShowPlayer] = useState(false);
  // For minimizing the player.
  const [isPlayerVisible, setPlayerVisible] = useState(true);

  useLayoutEffect(() => {
    if (showPlayer) {
      waveSurfer.current = WaveSurfer.create({
        container: '.waveform-content',
        waveColor: 'violet',
        progressColor: 'purple',
        barWidth: 2,
        cursorColor: '#fff',
        cursorWidth: 1,
        height: 50,
        responsive: true,
      });

      // Initialize the volume to half because it was too loud and jarring.
      waveSurfer.current.setVolume(0.5);
  
      waveSurfer.current.on('ready', function () {
        waveSurfer.current.play();
      });
  
      // Load the sound file after WaveSurfer is fully initialized.
      if (currentBeat) {
        waveSurfer.current.load(currentBeat.path);
      }
    
      return () => {
        waveSurfer.current && waveSurfer.current.destroy();
      };
    }
  }, [showPlayer, currentBeat]);
  
  const handlePlayBeat = (beat) => {
    if (currentBeat === beat) {
      if (waveSurfer.current.isPlaying()) {
        waveSurfer.current.pause();
        setIsPlaying(false);
      } else {
        waveSurfer.current.play();
        setIsPlaying(true);
      }
    } else {
      setShowPlayer(true);
      setCurrentBeat(beat);
      setIsPlaying(true);
    }
  }

  const handlePlayPause = () => {
    if (waveSurfer.current.isPlaying()) {
      waveSurfer.current.pause();
      setIsPlaying(false);
    } else {
      waveSurfer.current.play();
      setIsPlaying(true);
    }
  }
  
  useEffect(() => {
    if (waveSurfer.current) {
      waveSurfer.current.on('finish', function () {
        setIsPlaying(false);
      });
    }
  }, [waveSurfer.current]);

  useEffect(() => {
    const promises = beats.map(beat => {
      return new Promise((resolve, reject) => {
        const audio = new Audio(beat.path);
        audio.onloadedmetadata = function() {
          resolve({ ...beat, length: audio.duration });
        };
        audio.onerror = function() {
          reject(new Error('Failed to load audio file'));
        };
      });
    });
  
    Promise.all(promises).then(newBeats => {
      setBeats(newBeats);
    }).catch(err => {
      console.error(err);
    });
  
  }, []);

  const addToCart = (beatName) => {
    const beat = {
      name: beatName,
      price: 20,
    };
    setCart((prevCart) => [...prevCart, beat]);
  };

  function timeFormat(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  const changeVolume = (event) => {
    const volume = event.target.value;
    waveSurfer.current.setVolume(volume);
  }

  // useEffect(() => {
  //   const handleClickOutsidePlayer = (event) => {
  //     if (!document.getElementById('waveform').contains(event.target)) {
  //       setPlayerVisible(false);
  //     }
  //   }

  //   document.addEventListener('click', handleClickOutsidePlayer);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutsidePlayer);
  //   };
  // }, []);

  // const handlePlayerHeaderClick = (event) => {
  //   event.stopPropagation();
  //   setPlayerVisible(true)
  // }

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
          <h2>Beats:</h2>
          <div className='beats-container hidden'>
            {beats.map((beat, index) => (
              <li className='ind-beat' key={index} onClick={() => handlePlayBeat(beat)}>
                <img src = {beatCover} alt = 'beat' className='beat-cover' />
                <div className='beat-info'>
                  <p className='beat-title'>{beat.name}</p>
                  <p className='beat-time'>{timeFormat(beat.length)}</p> {/* Placeholder */}
                  <p className='beat-bpm'>{beat.bpm} BPM</p>
                  <div className='beat-tags'>
                    <p>Tags:</p>
                    {/* <p>{beat.tags}</p> lowkey fucks it up bc of relative height. dont implement until u feel like fixing it. */}
                  </div>
                  <div className='share-price-container'>
                    <button className='beat-share'><img src={shareIcon} alt='Share' /></button>
                    <button className="price-button" onClick={(e) => { e.stopPropagation(); addToCart(beat.name); }}>
                      <span className="cart-icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </span>
                      <span className="price-text">ADD</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
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

      {/* Audio player */}
      {showPlayer && (
        <div id='waveform' className={`sticky-waveform ${isPlayerVisible ? '' : 'minimized'}`}>
          <button className="arrow-button" onClick={(e) => { e.stopPropagation(); setPlayerVisible(!isPlayerVisible); }}>
            {/* <img src={upArrows} alt='Up'></img> */}
          </button>
          <img src={beatCover} alt='beat' className='waveform-beat-cover'/>
          <p className='waveform-beat-title'>{currentBeat.name}</p> {/* Placeholder */}
          <input type='range' id='volume' name='volume' min='0' max='2' step='0.1' onChange = {changeVolume} className='waveform-volume-slider' defaultValue='0.5' />
          <div className='waveform-content' onClick={() => waveSurfer.current.playPause()} />
          <div className='audio-controls'>
            <button className="rewind"> <img src={rewind} alt='Rewind'></img> </button>
            <button className="play-pause" 
              onClick={handlePlayPause}>
              <img 
                className ='audio-control-image' 
                src={isPlaying ? pause : play} 
                alt={isPlaying ? 'Pause' : 'Play'}
              />
            </button>
            <button className="fast-forward"> <img className='audio-control-image' src={fastForward} alt='Fast Forward' /> </button>
          </div>
          <div className='price-share-container'>
            <button className='beat-share'><img className='audio-control-image' src={shareIcon} alt='Share' /></button>
            <button className="price-button" onClick={(e) => { e.stopPropagation(); addToCart(currentBeat.name); }}>
              <span className="cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span className="price-text">ADD</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WTFIBeats;
