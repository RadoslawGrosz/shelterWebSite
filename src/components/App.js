import React from 'react';
import Header from './Header.js';
import Section from './Section'
import { StyledApp } from './styles/StyledApp.js';

function App() {


  return (
    <div className="Wrapper">
      <StyledApp />
      <Header />
      <Section />
    </div>
  );
}

export default App;
