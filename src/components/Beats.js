import React from 'react';
import "./Beats.css"

function WTFIBeats() {
  return (
    <div className ='beats-section'>
      <h2>Beats</h2>
      <ul className ='audio-section'>
        <li className ='ind-beat'>
          <audio className='audio' src="beat1.mp3" controls></audio>
          <p className='genre'>Hip-Hoppinin</p>
          <p className='price'>$20</p>
        </li>
        <li className='ind-beat'>
          <audio className='audio' src="beat2.mp3" controls></audio>
          <p className='genre'>R&B</p>
          <p className='price'>$25</p>
        </li>
        <li className='ind-beat'>
          <audio className='audio' src="beat3.mp3" controls></audio>
          <p className='genre'>Pop</p>
          <p className='price'>$30</p>
        </li>
      </ul>
    </div>
  );
}

export default WTFIBeats;
