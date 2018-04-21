import React from 'react';
import { Link } from 'react-router-dom';
import NeonSign from '../common/neonSign';

function Splash() {
  return (
    <div className="Hero">
      <header className="App-header">
        <NeonSign
          color="yellow"
          text="BEN SCHEINER"
        />
      </header>
      <p className="App-intro">
        <Link className="giant white link no-underline" to="/work">WORK</Link>
        <Link className="giant red link no-underline" to="/play">PLAY</Link>
      </p>
    </div>
  );
}

export default Splash;
