import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Hero">
        <header className="App-header">
          <span className="neon-yellow">BEN SCHEINER</span>
        </header>
        <p className="App-intro">
          <span className="giant white link">WORK</span>
          <span className="giant red link">PLAY</span>
        </p>
      </div>
    );
  }
}

export default App;
