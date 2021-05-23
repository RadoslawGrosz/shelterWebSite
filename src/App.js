import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import Home from './components/home/Home';
import Admin from './components/admin/admin';
import Login from './server/Login';
import GlobalStyles from './GlobalStyles';
import theme, { materialTheme } from './theme/Theme';
import { AuthProvider } from './server/Auth';
import PrivateRoute from './server/PrivateRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MaterialThemeProvider theme={materialTheme}> */}
      <AuthProvider>
        <Router>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Login} exact path="/login" />
            <PrivateRoute component={Admin} exact path="/admin" />
          </Switch>
          <GlobalStyles />
        </Router>
      </AuthProvider>
      {/* </MaterialThemeProvider> */}
    </ThemeProvider>
  );
}

export default App;
