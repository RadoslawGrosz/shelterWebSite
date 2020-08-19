import React from 'react';
import Header from './Header';
import Main from './Main';
import { GlobalStyles, StyledWrapper } from './styles/StyledApp';

function App() {
  return (
    <StyledWrapper className="Wrapper">
      <Header />
      <Main />
      <GlobalStyles />
    </StyledWrapper>
  );
}

export default App;
