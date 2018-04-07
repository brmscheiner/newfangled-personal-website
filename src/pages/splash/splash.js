import React from 'react';
import { Link } from 'react-router-dom';

function Splash() {
  return (
    <div className="Hero">
      <header className="App-header">
        <span className="neon yellow">BEN SCHEINER</span>
      </header>
      <p className="App-intro">
        <Link className="giant white link no-underline" to="/work">WORK</Link>
        <Link className="giant red link no-underline" to="/play">PLAY</Link>
      </p>
    </div>
  );
}

export default Splash;
