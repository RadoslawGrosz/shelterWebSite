import { ThemeProvider } from 'styled-components';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';
import theme from '../theme/Theme';
import { GlobalStyles, StyledWrapper } from './styles/StyledApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Header />
        <Main />
        <Section />
        <Footer />
        <GlobalStyles />
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
