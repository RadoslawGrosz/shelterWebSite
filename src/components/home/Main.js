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
  DivAbout,
  H1About,
  PAbout,
} from './styles/StyledMain';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const textElements = mainRef.current.querySelectorAll('.animated');

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
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet turpis et odio fermentum pharetra nec at lorem.',
      logo: faFacebook,
    },
    {
      title: 'Krok 2',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat nunc elit, et aliquet elit rhoncus non. Suspendisse potenti.',
      logo: faFileSignature,
    },
    {
      title: 'Krok 3',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, nulla a mattis euismod, elit velit laoreet augue.',
      logo: faPaw,
    },
  ];

  const articleList = [];

  articleElements.forEach(({ title, text, logo }) => {
    articleList.push(
      <StyledArticle key={title}>
        <StyledH2>{title}</StyledH2>
        <StyledP className="animated">{text}</StyledP>
        <StyledIconContainer blue className="animated">
          <FontAwesomeIcon icon={logo} />
        </StyledIconContainer>
      </StyledArticle>,
    );
  });

  return (
    <StyledMain ref={mainRef} id="main">
      <StyledH1>Adopcja w trzech krokach</StyledH1>
      <ArticlesWrapper>{articleList}</ArticlesWrapper>
      <DivAbout>
        <H1About>O nas</H1About>
        <PAbout>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          lectus nisl, dictum vel sodales eget, euismod sodales neque. Vivamus
          eu lobortis leo. Praesent placerat tortor non fermentum tempus. Proin
          imperdiet orci vel imperdiet congue. Morbi quis varius lacus, sit amet
          aliquet ligula. Phasellus ornare eros vel aliquam pellentesque.
          Quisque nec semper velit.
        </PAbout>
      </DivAbout>
    </StyledMain>
  );
};

export default Main;
