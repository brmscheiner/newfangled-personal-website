import React from 'react'
import { Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/home'
import Coastlines from './pages/posts/Coastlines'
import UseDimensions from './pages/posts/UseDimensions'
import Cuba from './pages/posts/Cuba'
import Squirrels from './pages/posts/Squirrels'
import NeedD3 from './pages/posts/NeedD3'
import './styles/Base.css'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route path="/coastlines" component={Coastlines} />
      <Route path="/cuba" component={Cuba} />
      <Route path="/squirrels" component={Squirrels} />
      <Route path="/use-dimensions" component={UseDimensions} />
      <Route path="/you-dont-need-d3" component={NeedD3} />
      <Footer />
    </div>
  )
}
