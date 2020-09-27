import React, { useRef, useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';
import StyledWrapper from './styles/StyledHome';

function Home() {
  const wrapperRef = useRef(null);

  return (
    <StyledWrapper ref={wrapperRef}>
      <Menu />
      <Header wrapperRef={wrapperRef} />
      <Main />
      <Section wrapperRef={wrapperRef} />
      <Footer />
    </StyledWrapper>
  );
}

export default Home;
