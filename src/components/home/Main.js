import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPaw, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  StyledMain,
  StyledH1,
  ArticlesWrapper,
  StyledArticle,
  StyledH2,
  StyledP,
  StyledIconContainer,
} from './styles/StyledMain';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const textElements = mainRef.current.querySelectorAll('p');

    textElements.forEach((el) => {
      gsap.to(el, {
        autoAlpha: 1,
        y: '0',
        duration: 3,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
        },
      });
    });
  });

  return (
    <StyledMain ref={mainRef} id="main">
      <StyledH1>Adopcja w trzech krokach</StyledH1>
      <ArticlesWrapper>
        <StyledArticle>
          <StyledH2>
            Krok 1
          </StyledH2>
          <StyledP>
            skontaktuj sie z nami
          </StyledP>
          <StyledIconContainer>
            <FontAwesomeIcon icon={faFacebook} />
          </StyledIconContainer>
        </StyledArticle>
        <StyledArticle>
          <StyledH2>Krok 2</StyledH2>
          <StyledP>
            Podpisz dokumenty
          </StyledP>
          <StyledIconContainer>
            <FontAwesomeIcon icon={faFileSignature} />
          </StyledIconContainer>
        </StyledArticle>
        <StyledArticle>
          <StyledH2>
            Krok 3
          </StyledH2>
          <StyledP>
            Zabierz psa do domu
          </StyledP>
          <StyledIconContainer>
            <FontAwesomeIcon icon={faPaw} />
          </StyledIconContainer>
        </StyledArticle>
      </ArticlesWrapper>
    </StyledMain>
  );
};

export default Main;
