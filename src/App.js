import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/home/Home';
import Admin from './components/admin/admin';
import Login from './server/Login';
import GlobalStyles from './GlobalStyles';
import theme from './theme/Theme';
import { AuthProvider } from './server/Auth';
import PrivateRoute from './server/PrivateRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route component={Home} exact path="/" />
            <PrivateRoute component={Admin} exact path="/admin" />
            <Route component={Login} exact path="/login" />
          </Switch>
          <GlobalStyles />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
