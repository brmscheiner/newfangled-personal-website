import React from 'react';
import { Link } from 'react-router-dom';

function Splash() {
  return (
    <div className="Hero">
      <header className="App-header">
        <span className="neon-yellow">BEN SCHEINER</span>
      </header>
      <p className="App-intro">
        <span className="giant white link">
          <Link to="/work">WORK</Link>
        </span>
        <span className="giant red link">
          <Link to="/play">PLAY</Link>
        </span>
      </p>
    </div>
  );
}

export default Splash;
