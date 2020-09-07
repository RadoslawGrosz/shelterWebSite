import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Admin from './admin/admin';
import GlobalStyles from './GlobalStyles';

function Root() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Admin} path="/admin" />
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default Root;
