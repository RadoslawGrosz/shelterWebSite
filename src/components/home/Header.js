import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import { StyledHeader, StyledNav, StyledButton } from './styles/StyledHeader';

const Header = ({ setIsMenuVisible }) => {
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

  const handleScrollToMain = () => {
    const destinationY = window.innerHeight;
    window.scrollTo(0, destinationY);
  };

  return (
    <StyledHeader>
      <StyledNav ref={nav}>
        <StyledButton onClick={handleScrollToMain}>Jak adoptować</StyledButton>
        <StyledButton onClick={() => setIsMenuVisible(true)}>Menu</StyledButton>
      </StyledNav>
    </StyledHeader>
  );
};

Header.propTypes = {
  setIsMenuVisible: PropTypes.func,
};

Header.defaultProps = {
  setIsMenuVisible: () => null,
};

export default Header;
