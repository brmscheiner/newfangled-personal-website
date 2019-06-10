import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NeonSign from '../../components/NeonSign';
import Backsplash from './Backsplash';

class Splash extends Component {
  state = {
    width: null,
    height: null
  };

  registerContainer = div => {
    if (!div || !div.getBoundingClientRect) return;
    const { width, height } = div.getBoundingClientRect();
    console.log('setstate!', { width, height });
    this.setState({ width, height });
  };

  render() {
    const { width, height } = this.state;
    return (
      <div ref={this.registerContainer} style={{ height: '100%' }}>
        <Backsplash width={width} height={height} />
        <div className="Hero">
          <header className="App-header">
            <NeonSign color="yellow">Ben Scheiner</NeonSign>
          </header>
          <p className="App-intro">
            <Link className="giant white link no-underline" to="/work">
              WORK
            </Link>
            <Link className="giant red link no-underline" to="/play">
              PLAY
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Splash;
