import styled from 'styled-components';
import { WrapperEvents, EventsButton, AllEventsWrapper } from './Events';
import { Description, Title } from './About';

export const WrapperVolunteer = styled(WrapperEvents)`
  align-items: flex-start;
  background-color: #c18039;
  color: #fff;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  @media (orientation: portrait) {
    margin-top: 6vh;
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    margin-right: 1em;
    padding: 2em 3em 3.5em;
  }
`;

export const VolunteerInfoSectionButton = styled(EventsButton)`
  margin-top: 2em;
`;

export const VolunteerInfoTitle = styled(Title)`
  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    font-size: 2em;
  }
`;

export const VolunteerInfoWrapperMore = styled(AllEventsWrapper)`
  transform: translate(-100vw, -50%);
`;

export const DescriptionVolunteer = styled(Description)``;
