import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledHeader, StyledNav, StyledButton } from './styles/StyledHeader';

const Header = () => {
  const nav = useRef(null);

  useEffect(() => {
    const [buttonAdopt, buttonContact] = nav.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.to(buttonAdopt, {
      autoAlpha: 1,
      x: '0',
      duration: 0.8,
    }).to(buttonContact, { autoAlpha: 1, x: '0', duration: 0.8 });
  });

  const handleScroll = () => {
    const destinationY = window.innerHeight;
    window.scrollTo(0, destinationY);
  };

  return (
    <StyledHeader>
      <StyledNav ref={nav}>
        <StyledButton onClick={handleScroll}>Jak adoptować</StyledButton>
        <StyledButton>Kontakt</StyledButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
