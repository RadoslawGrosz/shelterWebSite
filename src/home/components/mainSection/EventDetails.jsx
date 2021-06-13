import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
  WrapperEvents,
  EventWrapper,
  IconWrapper,
  TextWrapper,
  EventName,
  EventDescription,
  EventDetailsWrapper,
} from '../../styles/mainSection/Events';

const EventDetails = () => {
  return (
    <EventDetailsWrapper>
      <WrapperEvents>
        <EventWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </IconWrapper>
          <TextWrapper>
            <EventName>
              05.05 - Lorem ipsum dolor sit amet fermentum tempus.
            </EventName>
            <EventDescription>
              consectetur adipiscing elit.Maecenas lectus nisl, dictum vel
              sodales eget, euismod sodales neque. Vivamus eu lobortis leo.
              Praesent placerat tortor non
            </EventDescription>
          </TextWrapper>
        </EventWrapper>
      </WrapperEvents>
    </EventDetailsWrapper>
  );
};

export default EventDetails;
