import React from 'react';
import Header from './Header.js';
import Main from './Main'
import { StyledApp } from './styles/StyledApp.js';

function App() {


  return (
    <div className="Wrapper">
      <StyledApp />
      <Header />
      <Main />
    </div>
  );
}

export default App;
