import React from 'react';
import { Route } from 'react-router-dom';
import Work from './pages/work/Work';
import Motorized from './pages/work/Motorized';
import splash from './pages/splash/splash';
import Play from './pages/play/play';
import Coastlines from './pages/galleries/coastlines';
import Cuba from './pages/galleries/cuba';
import './App.css';

export default function App() {
  return (
    <div style={{ height: '100%' }}>
      <Route exact path="/" component={splash} />
      <Route path="/work" component={Work} />
      <Route path="/play" component={Play} />
      <Route path="/coastlines" component={Coastlines} />
      <Route path="/cuba" component={Cuba} />
      <Route path="/motorized" component={Motorized} />
    </div>
  );
}
