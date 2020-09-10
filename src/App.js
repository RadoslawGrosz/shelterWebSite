import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Admin from './components/admin/admin';
import GlobalStyles from './GlobalStyles';

function App() {
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

export default App;
