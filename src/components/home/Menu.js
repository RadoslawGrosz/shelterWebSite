import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledNav, StyledUl, StyledLi, StyledA } from './styles/StyledMenu';
import useTriggerMenuOnScroll from './hooks/useTriggerMenuOnScroll';
import useChangeMenuOnTrigger from './hooks/useChangeMenuOnTrigger';

const Menu = ({ isMenuVisible }) => {
  const navRef = useRef(null);
  // const [isMenuTriggered, setIsMenuTriggered] = useState(false);
  const [screenOrientation, setScreenOrientation] = useState(window.screen.orientation.type);
  const [isMenuTriggered] = useTriggerMenuOnScroll(navRef);
  useChangeMenuOnTrigger(navRef, isMenuTriggered, screenOrientation);

  useEffect(() => {
    const [buttonDogs, buttonAdopt, buttonContact] = navRef.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl
      .to(buttonDogs, {
        autoAlpha: 1,
        x: '0',
        duration: 0.8,
      })
      .to(buttonContact, { autoAlpha: 1, x: '0', duration: 0.8 })
      .to(buttonAdopt, { autoAlpha: 1, duration: 0.8 });
  });

  useEffect(() => {
    const listener = window.addEventListener('orientationchange', (event) => {
      setScreenOrientation(event.target.screen.orientation.type);
    });
    return () => window.removeEventListener('orientationchange', listener);
  }, []);

  return (
    <StyledNav>
      <StyledUl ref={navRef}>
        <StyledLi>
          <StyledA>
            Psy do adpocji
          </StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA>
            Jak adoptować
          </StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA>
            Kontakt
          </StyledA>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Menu;
