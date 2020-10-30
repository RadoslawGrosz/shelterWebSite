import styled from 'styled-components';
import backgroundDog from '../../../img/backgroundDog.jpg';
import backgroundPortrait from '../../../img/backgroundPortrait.jpg';

export const StyledHeader = styled.header`
  position: fixed;
  height: 100vh;
  width: 100vw;

  background-image: url(${backgroundPortrait});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  @media (orientation: landscape) {
    background-image: url(${backgroundDog});
    background-size: cover;
  }

  box-shadow: 0 0 10vmin rgba(0,0,0,0.8) inset;
`;

export const HeaderHover = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* height: 100vh;
  width: 100vw; */

  background-color: #000;
  /* z-index: 10; */
`;
