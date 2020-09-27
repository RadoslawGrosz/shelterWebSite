import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/home/Home';
import Admin from './components/admin/admin';
import GlobalStyles from './GlobalStyles';
import theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Admin} path="/admin" />
        </Switch>
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}

export default App;
