import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Events from './Events';
import ShortInfo from './ShortInfo';
import {
  WideWrapper,
  ButtonSlideLeft,
  ButtonSlideRight,
  ButtonSlideLeftEventDetails,
} from '../../styles/mainSection/Carousel';
import useScreenOrientation from '../../hooks/useScreenOrientation';
import EventDetails from './EventDetails';

const Carousel = () => {
  const wideWrapperRef = useRef(null);
  const isLandscape = useScreenOrientation();

  const slideCarousel = (
    isMovingLeft = false,
    distance = window.innerWidth,
  ) => {
    const wideWrapper = wideWrapperRef.current;
    const moveDistance = isMovingLeft ? -distance : distance;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to(wideWrapper, {
      x: `+=${moveDistance}`,
      duration: 1,
    });
  };

  const fixWrapperPosition = () => {
    const wideWrapper = wideWrapperRef.current;
    if (!gsap.getProperty(wideWrapper, 'x')) return;

    const moveDistance =
      gsap.getProperty(wideWrapper, 'x') < 0
        ? -window.innerWidth
        : window.innerWidth;

    gsap.to(wideWrapper, {
      x: 0 + moveDistance,
    });
  };

  useEffect(() => {
    fixWrapperPosition();
  }, [isLandscape]);

  useEffect(() => {
    const listener = window.addEventListener('resize', fixWrapperPosition);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return (
    <WideWrapper ref={wideWrapperRef}>
      <ShortInfo slideCarousel={slideCarousel} />
      <Events slideCarousel={slideCarousel} />
      <EventDetails />
      <ButtonSlideLeft left onClick={() => slideCarousel(true)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ButtonSlideLeft>
      <ButtonSlideRight left onClick={() => slideCarousel()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </ButtonSlideRight>
      <ButtonSlideLeft onClick={() => slideCarousel(true)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ButtonSlideLeft>
      <ButtonSlideRight onClick={() => slideCarousel()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </ButtonSlideRight>
      <ButtonSlideLeftEventDetails>
        <FontAwesomeIcon onClick={() => slideCarousel()} icon={faArrowRight} />
      </ButtonSlideLeftEventDetails>
    </WideWrapper>
  );
};

export default Carousel;
