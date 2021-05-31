import React, { useRef } from 'react';
import Header from './header/Header';
import Menu from './header/Menu';
import AdoptInfoSection from './adoptInfoSection/AdoptInfoSection';
import MainSection from './mainSection/MainSection';
import Footer from './Footer';
import StyledWrapper from '../styles/StyledHome';

function Home() {
  const wrapperRef = useRef(null);

  return (
    <StyledWrapper ref={wrapperRef}>
      <Menu />
      <Header wrapperRef={wrapperRef} />
      <AdoptInfoSection />
      <MainSection wrapperRef={wrapperRef} />
      <Footer />
    </StyledWrapper>
  );
}

export default Home;
