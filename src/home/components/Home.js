import React, { useRef, Suspense } from 'react';
// import Header from './header/Header';
import Menu from './header/Menu';
import AdoptInfoSection from './adoptInfoSection/AdoptInfoSection';
// import MainSection from './mainSection/MainSection';
import Footer from './Footer';
import StyledWrapper from '../styles/StyledHome';

const Header = React.lazy(() => import('./header/Header'));
const MainSection = React.lazy(() => import('./mainSection/MainSection'));

function Home() {
  const wrapperRef = useRef(null);

  return (
    <StyledWrapper ref={wrapperRef}>
      <Menu />
      <Header wrapperRef={wrapperRef} />
      <AdoptInfoSection />
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection wrapperRef={wrapperRef} />
      </Suspense>
      <Footer />
    </StyledWrapper>
  );
}

export default Home;
