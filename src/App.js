import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Coastlines from "./pages/posts/Coastlines";
import UseDimensions from "./pages/posts/UseDimensions";
import Cuba from "./pages/posts/Cuba";
import "./styles/Base.css";

export default function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/coastlines" component={Coastlines} />
      <Route path="/cuba" component={Cuba} />
      <Route path="/use-dimensions" component={UseDimensions} />
    </div>
  );
}
