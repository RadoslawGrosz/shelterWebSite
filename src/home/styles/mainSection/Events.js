import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { WrapperAbout, Title, Description } from './About';
import WrapperInfo from './ShortInfo';

export const WrapperEvents = styled(WrapperAbout)`
  align-items: flex-start;

  padding-top: 0;
  padding-bottom: 0;

  background-color: transparent;
  color: black;
  transform: none;

  @media (orientation: landscape) {
    align-items: flex-start;
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    padding: 0 1rem 4rem;
    line-height: 1.5rem;
  }
`;

export const TextWrapper = styled.div``;

export const IconWrapper = styled.div`
  font-size: 6vmin;
  padding-right: 5%;
  color: ${({ theme }) => theme.mainColorLight};

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    font-size: 3.5rem;
  }
`;

export const EventWrapperTitle = styled(Title)`
  letter-spacing: 0.1em;

  @media (orientation: landscape) {
    /* margin: 0; */
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    font-size: 3rem;
    line-height: 7rem;
  }
`;

export const EventWrapper = styled.div`
  display: flex;

  width: 100%;
  margin-bottom: 2vmin;

  cursor: ${(props) => (props.allView ? 'pointer' : 'default')};
  transition: 0.3s;

  &:hover {
    transform: ${(props) => (props.allView ? 'scale(1.1)' : 'scale(1)')};
  }
`;

export const EventName = styled(Description)`
  text-align: left;
  margin-bottom: 2vmin;
`;

export const EventDescription = styled(EventName)``;

export const EventsButton = styled(Button)`
  font-size: 1em;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  border: none;
  border-radius: 2rem;
  padding: 0.7em 1.5em;

  background-color: ${({ theme }) => theme.mainColorLight};
  color: white;

  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.mainColorLight};
    transform: scale(1.1);
  }
`;

export const AllEventsWrapper = styled(WrapperInfo)`
  position: absolute;
  top: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    flex-direction: row;
    align-items: flex-start;
    padding: 0 5vmin;
  }

  @media (${({ theme }) => theme.xxl}) {
    width: 60%;
    padding: 0;
  }

  transform: translate(100vw, -50%);
`;

export const EventDetailsWrapper = styled(AllEventsWrapper)`
  transform: translate(200vw, -50%);
`;
