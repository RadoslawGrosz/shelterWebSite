import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import EventsSection from './EventsSection';
import VolunteerInfoSection from './VolunteerInfoSection';
import AllEventsSection from './AllEventsSection';
import {
  WideWrapper,
  InfoWrapper,
  VolunteerInfoWrapperMore,
  ButtonSlideLeft,
  ButtonSlideRight,
  ButtonSlideLeftEventDetails,
} from '../../styles/StyledMainSection';
import useScreenOrientation from '../../hooks/useScreenOrientation';
import EventDetails from './EventDetails';

const InfoSection = () => {
  const wideWrapperRef = useRef(null);
  const isLandscape = useScreenOrientation();

  const slideWideWrapper = (
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
      <VolunteerInfoWrapperMore>
        <EventsSection />
        <VolunteerInfoSection />
      </VolunteerInfoWrapperMore>
      <InfoWrapper>
        <EventsSection slideWideWrapper={slideWideWrapper} />
        <VolunteerInfoSection slideWideWrapper={slideWideWrapper} />
      </InfoWrapper>
      <AllEventsSection slideWideWrapper={slideWideWrapper} />
      <EventDetails />
      <ButtonSlideLeft left onClick={() => slideWideWrapper(true)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ButtonSlideLeft>
      <ButtonSlideRight left onClick={() => slideWideWrapper()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </ButtonSlideRight>
      <ButtonSlideLeft onClick={() => slideWideWrapper(true)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ButtonSlideLeft>
      <ButtonSlideRight onClick={() => slideWideWrapper()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </ButtonSlideRight>
      <ButtonSlideLeftEventDetails>
        <FontAwesomeIcon
          onClick={() => slideWideWrapper()}
          icon={faArrowRight}
        />
      </ButtonSlideLeftEventDetails>
    </WideWrapper>
  );
};

export default InfoSection;
