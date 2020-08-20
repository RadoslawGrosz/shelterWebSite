import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StyledMain from './styles/StyledMain';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const textElements = mainRef.current.querySelectorAll('p');

    textElements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
        },
        autoAlpha: 1,
        y: '0',
        duration: 3,
      });
    });
  });

  return (
    <StyledMain ref={mainRef} className="Main">
      <h1 className="Main__title">Adopcja w trzech krokach</h1>
      <article className="Main__Info-container">
        <h2 className="Main__Info-container__title">Krok 1</h2>
        <p className="Main__Info-container__text">skontaktuj sie z nami</p>
      </article>
      <article className="Main__Info-container">
        <h2 className="Main__Info-container__title">Krok 2</h2>
        <p className="Main__Info-container__text">Podpisz dokumenty</p>
      </article>
      <article className="Main__Info-container">
        <h2 className="Main__Info-container__title">Krok 3</h2>
        <p className="Main__Info-container__text">Zabierz psa do domu</p>
      </article>
    </StyledMain>
  );
};

export default Main;
