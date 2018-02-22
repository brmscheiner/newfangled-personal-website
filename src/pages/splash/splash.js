import React from 'react';

function Splash(props) {
  return (
    <div className="Hero">
      <header className="App-header">
        <span className="neon-yellow">BEN SCHEINER</span>
      </header>
      <p className="App-intro">
        <span
          onClick={() => props.onChangePage('COASTLINES')}
          className="giant white link"
        >WORK</span>
        <span className="giant red link">PLAY</span>
      </p>
    </div>
  );
}

export default Splash;
