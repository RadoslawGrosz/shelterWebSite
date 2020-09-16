import { ThemeProvider } from 'styled-components';
import React, { useRef, useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';
import theme from '../../theme/Theme';
import StyledWrapper from './styles/StyledHome';

function Home() {
  const wrapperRef = useRef(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleHideMenu = () => {
    if (isMenuVisible) setIsMenuVisible(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper ref={wrapperRef} onClick={handleHideMenu}>
        <Header setIsMenuVisible={setIsMenuVisible} />
        <Main />
        <Section wrapperRef={wrapperRef} />
        <Footer />
      </StyledWrapper>
      <Menu isMenuVisible={isMenuVisible} />
    </ThemeProvider>
  );
}

export default Home;
