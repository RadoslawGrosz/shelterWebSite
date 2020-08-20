import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import StyledHeader from './styles/StyledHeader';

const Header = () => {
  const nav = useRef(null);

  useEffect(() => {
    const [buttonAdopt, buttonContact] = nav.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl
      .to(buttonAdopt, { autoAlpha: 1, x: '0', duration: 0.8 })
      .to(buttonContact, { autoAlpha: 1, x: '0', duration: 0.8 });
  });

  return (
    <StyledHeader className="Header">
      <nav ref={nav} className="Header__nav">
        <button type="button" className="Header__nav__link">Jak adoptować</button>
        <button type="button" className="Header__nav__link">Kontakt</button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
