import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './home/App';
import Admin from './admin/admin';

function Root() {
  return (
    <Router>
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Admin} path="/admin" />
      </Switch>
    </Router>
  );
}

export default Root;
