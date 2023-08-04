import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import other components for different routes
import Home from '..Home/pages/Home.js';
import About from '..pages/.js';
import Logement from '../pages/Logement.js';
import Landing404 from '../pages/Landing404.js';

const Rooter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Rooter;
