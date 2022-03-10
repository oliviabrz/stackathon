import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from './Card';
import App from './App';

const Routes = () => {
  return (
    <div>
      <Router>
        <Route exact path='/' component={App} />
        <Route exact path='/card' component={Card} />
      </Router>
    </div>
  );
};

export default Routes;
