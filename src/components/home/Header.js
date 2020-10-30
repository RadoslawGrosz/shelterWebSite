import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledHeader, HeaderHover } from './styles/StyledHeader';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    gsap.to(header, { autoAlpha: 0, duration: 5, ease: 'power4.out' });
  });

  return (
    <StyledHeader>
      <HeaderHover ref={headerRef} />
    </StyledHeader>
  );
};

export default Header;
