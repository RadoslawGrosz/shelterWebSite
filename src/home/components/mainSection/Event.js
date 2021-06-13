import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
  EventWrapper,
  IconWrapper,
  TextWrapper,
  EventName,
  EventDescription,
} from '../../styles/mainSection/Events';

const Event = ({ event, slideCarousel }) => {
  const { name, description } = event;

  return (
    <EventWrapper allView onClick={slideCarousel}>
      <IconWrapper>
        <FontAwesomeIcon icon={faCalendarAlt} />
      </IconWrapper>
      <TextWrapper>
        <EventName>{name}</EventName>
        <EventDescription>{description}</EventDescription>
      </TextWrapper>
    </EventWrapper>
  );
};

export default Event;
