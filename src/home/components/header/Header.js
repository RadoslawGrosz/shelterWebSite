import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  StyledHeader,
  ImageContainer,
  HeaderHover,
} from '../../styles/StyledHeader';

const Header = () => {
  const headerRef = useRef(null);
  const ImageContainerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const image = ImageContainerRef.current;

    const tl = gsap.timeline({ defaults: { ease: 'power0.out' } });

    tl.to(header, { autoAlpha: 0.05, duration: 0.5 }).to(image, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      // delay: 2,
    });
  });

  return (
    <StyledHeader>
      <ImageContainer ref={ImageContainerRef} />
      <HeaderHover ref={headerRef} />
    </StyledHeader>
  );
};

export default Header;
