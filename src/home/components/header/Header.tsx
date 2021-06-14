import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledHeader, ImageContainer, HeaderHover } from '../../styles/StyledHeader';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const ImageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const image = ImageContainerRef.current;

    const tl = gsap.timeline({ defaults: { ease: 'power0.out' } });

    tl.to(header, { autoAlpha: 0.05, duration: 1 }).to(image, {
      autoAlpha: 1,
      y: 0,
      duration: 3,
      ease: 'power3.out',
      delay: 2,
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
