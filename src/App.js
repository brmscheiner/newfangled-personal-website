import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MPVitae from './pages/mp/mp-vitae'
import splash from './pages/splash/splash'
import Coastlines from './pages/galleries/coastlines'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={splash} />
        <Route path="/work" component={MPVitae} />
        <Route path="/play" component={Coastlines} />
      </div>
    );
  }
}

export default App;
