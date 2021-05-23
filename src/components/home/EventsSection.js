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
} from './styles/StyledMainSection';

const EventsSection = () => {
  return (
    <EventsWrapper>
      <EventWrapperTitle>Wydarzenia</EventWrapperTitle>
      <EventWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </IconWrapper>
        <TextWrapper>
          <EventName>
            05.05 - Lorem ipsum dolor sit amet fermentum tempus.
          </EventName>
          <EventDescription>
            consectetur adipiscing elit.Maecenas lectus nisl, dictum vel sodales
            eget, euismod sodales neque. Vivamus eu lobortis leo. Praesent
            placerat tortor non
          </EventDescription>
        </TextWrapper>
      </EventWrapper>
      <EventWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </IconWrapper>
        <TextWrapper>
          <EventName>
            12.04 - Lorem ipsum dolor sit amet fermentum tempus.
          </EventName>
          <EventDescription>
            consectetur adipiscing elit. Maecenas lectus nisl, dictum vel
            sodales eget, euismod sodales neque. Vivamus eu lobortis leo.
            Praesent placerat tortor non
          </EventDescription>
        </TextWrapper>
      </EventWrapper>
      <EventsButton>Pokaż więcej</EventsButton>
    </EventsWrapper>
  );
};

export default EventsSection;
