import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledA,
  LogoContainer,
} from './styles/StyledMenu';
import useTriggerMenuOnScroll from './hooks/useTriggerMenuOnScroll';
import useChangeMenuOnTrigger from './hooks/useChangeMenuOnTrigger';

const Menu = () => {
  const navRef = useRef(null);
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia('(orientation: landscape)').matches,
  );
  const [isMenuTriggered] = useTriggerMenuOnScroll(navRef);
  useChangeMenuOnTrigger(navRef, isMenuTriggered, isLandscape);

  useEffect(() => {
    const [logo, buttonDogs, buttonAdopt, buttonContact] = navRef.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.to(buttonDogs, {
      autoAlpha: 1,
      x: '0',
      duration: 0.8,
    })
      .to(buttonAdopt, { autoAlpha: 1, duration: 0.8 })
      .to(buttonContact, { autoAlpha: 1, duration: 0.8 })
      .to(logo, { autoAlpha: 1, duration: 0.8 });
  });

  const handleOrientationChange = () => {
    setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
  };

  useEffect(() => {
    const listener = window.addEventListener(
      'orientationchange',
      handleOrientationChange,
    );
    return () => window.removeEventListener('orientationchange', listener);
  });

  useEffect(() => {
    const listener = window.addEventListener('resize', handleOrientationChange);
    return () => window.removeEventListener('resize', listener);
  });

  const NavigationButtons = [];

  ['Psy do adpocji', 'Jak adoptować', 'Kontakt'].forEach((name) => {
    NavigationButtons.push(
      <StyledLi key={name}>
        <StyledA>{name}</StyledA>
      </StyledLi>,
    );
  });

  return (
    <StyledNav>
      <StyledUl ref={navRef}>
        <StyledLi>
          <StyledA>
            <LogoContainer>
              <FontAwesomeIcon icon={faPaw} />
            </LogoContainer>
            Schronisko dla zwierząt
          </StyledA>
        </StyledLi>
        {NavigationButtons}
      </StyledUl>
    </StyledNav>
  );
};

export default Menu;
