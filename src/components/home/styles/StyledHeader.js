import styled from 'styled-components';
import backgroundDog from '../../../img/backgroundDog.jpg';
import smallBackgroundDog from '../../../img/smallBackgroundDog.jpg';
import mediumBackgroundDog from '../../../img/mediumBackgroundDog.jpg';
import bigBackgroundDog from '../../../img/bigBackgroundDog.jpg';
import backgroundPortrait from '../../../img/backgroundPortrait.jpg';
import smallBackgroundPortrait from '../../../img/smallBackgroundPortrait.jpg';
import mediumBackgroundPortrait from '../../../img/mediumBackgroundPortrait.jpg';
import bigBackgroundPortrait from '../../../img/bigBackgroundPortrait.jpg';

export const StyledHeader = styled.header`
  position: fixed;
  height: 100vh;
  width: 100vw;

  background-image: url(${smallBackgroundPortrait});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  @media (${({ theme }) => theme.m}) {
    background-image: url(${mediumBackgroundPortrait});
  }

  @media (${({ theme }) => theme.l}) {
    background-image: url(${bigBackgroundPortrait});
  }

  @media (${({ theme }) => theme.xl}) {
    background-image: url(${backgroundPortrait});
  }

  @media (orientation: landscape) {
    background-image: url(${smallBackgroundDog});
    
    @media (${({ theme }) => theme.m}) {
      background-image: url(${mediumBackgroundDog});
    }

    @media (${({ theme }) => theme.xl}) {
      background-image: url(${bigBackgroundDog});
    }

    @media (${({ theme }) => theme.xxl}) {
      background-image: url(${backgroundDog});
    }
  }

  box-shadow: 0 0 10vmin rgba(0,0,0,0.8) inset;
`;

export const HeaderHover = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: #000;
`;
