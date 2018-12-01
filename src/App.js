import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './features/app-grid/xtn-header';
import Videos from './features/videos';
import Home from './features/app-grid';
import About from './features/pages/about';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/videos" component={Videos} />
    </div>
  </Router>
);

export default App;
