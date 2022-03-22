import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledA,
  LogoContainer,
} from '../../styles/StyledMenu';
import useTriggerMenuOnScroll from '../../hooks/useTriggerMenuOnScroll';
import useChangeMenuOnTrigger from '../../hooks/useChangeMenuOnTrigger';
import useScreenOrientation from '../../hooks/useScreenOrientation';

const Menu = () => {
  const navRef = useRef(null);
  const ulRef = useRef(null);
  const isLandscape = useScreenOrientation();
  const [isMenuTriggered] = useTriggerMenuOnScroll(navRef);
  useChangeMenuOnTrigger(navRef, isMenuTriggered, isLandscape);

  useEffect(() => {
    const [logo, buttonDogs, buttonAdopt] = ulRef.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.to(logo, {
      autoAlpha: 1,
      x: 0,
      duration: 0,
      // delay: 0.6,
    })
      .to(buttonDogs, {
        autoAlpha: 1,
        x: 0,
        duration: 0,
      })
      .to(buttonAdopt, { autoAlpha: 1, duration: 0 });
  }, []);

  const handleScroll = (name) => {
    const navBarHeight = navRef.current.offsetHeight;

    switch (name) {
      case 'Zwierzęta do adpocji':
        window.scrollTo(
          0,
          document.querySelector('#section').offsetTop - navBarHeight,
        );
        break;
      case 'Jak adoptować':
        window.scrollTo(0, window.innerHeight - navBarHeight);
        break;
      case 'Kontakt':
        window.scrollTo(0, document.body.scrollHeight);
        break;
      default:
        break;
    }
  };

  const NavigationButtons = [];

  ['Zwierzęta do adpocji', 'Jak adoptować'].forEach((name) => {
    NavigationButtons.push(
      <StyledLi key={name}>
        <StyledA onClick={() => handleScroll(name)}>{name}</StyledA>
      </StyledLi>,
    );
  });

  return (
    <StyledNav ref={navRef}>
      <StyledUl ref={ulRef}>
        <StyledLi>
          <StyledA onClick={() => window.scrollTo(0, 0)}>
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
