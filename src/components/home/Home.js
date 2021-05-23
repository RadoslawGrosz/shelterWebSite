import React, { useRef } from 'react';
import Header from './Header';
import Menu from './Menu';
import AdoptInfoSection from './AdoptInfoSection';
import MainSection from './MainSection';
import Footer from './Footer';
import StyledWrapper from './styles/StyledHome';

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
