import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
  EventsWrapper,
  EventWrapperTitle,
  EventWrapper,
  IconWrapper,
  TextWrapper,
  EventName,
  EventDescription,
  EventsButton,
  AllEventsWrapper,
} from '../../styles/mainSection/StyledMainSection';

const Event = ({ event }) => {
  const { name, description } = event;

  return (
    <EventWrapper allView onClick={slideWideWrapper}>
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
