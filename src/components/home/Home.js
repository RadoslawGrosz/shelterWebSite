import { ThemeProvider } from 'styled-components';
import React, { useRef} from 'react';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';
import theme from '../../theme/Theme';
import StyledWrapper from './styles/StyledHome';

function Home() {
  const wrapperRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper ref={wrapperRef}>
        <Header />
        <Main />
        <Section wrapperRef={wrapperRef} />
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default Home;
