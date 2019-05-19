import React from 'react';
import { Route } from 'react-router-dom';
import MPVitae from './pages/mp/mp-vitae';
import splash from './pages/splash/splash';
import Play from './pages/play/play';
import Coastlines from './pages/galleries/coastlines';
import Cuba from './pages/galleries/cuba';

import './App.css';

export default function App() {
  return (
    <div style={{ height: '100%' }}>
      <Route exact path="/" component={splash} />
      <Route path="/work" component={MPVitae} />
      <Route path="/play" component={Play} />
      <Route path="/coastlines" component={Coastlines} />
      <Route path="/cuba" component={Cuba} />
    </div>
  );
}
