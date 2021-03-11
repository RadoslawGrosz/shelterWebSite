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

  const articleElements = [
    {
      title: 'Krok 1',
      text: 'skontaktuj sie z nami',
      logo: faFacebook,
    },
    {
      title: 'Krok 2',
      text: 'Podpisz dokumenty',
      logo: faFileSignature,
    },
    {
      title: 'Krok 3',
      text: 'Zabierz psa do domu',
      logo: faPaw,
    },
  ];

  const articleList = [];

  articleElements.forEach(({ title, text, logo }) => {
    articleList.push(
      <StyledArticle key={title}>
        <StyledH2>{title}</StyledH2>
        <StyledP>{text}</StyledP>
        <StyledIconContainer blue>
          <FontAwesomeIcon icon={logo} />
        </StyledIconContainer>
      </StyledArticle>,
    );
  });

  return (
    <StyledMain ref={mainRef} id="main">
      <StyledH1>Adopcja w trzech krokach</StyledH1>
      <ArticlesWrapper>{articleList}</ArticlesWrapper>
    </StyledMain>
  );
};

export default Main;
