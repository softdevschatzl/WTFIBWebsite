import React from 'react';

function Body() {
  return (
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
  );
}

export default Body;
