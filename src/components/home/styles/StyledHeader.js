import styled from 'styled-components';
import backgroundDog from '../../../img/backgroundDog.jpg';

export default styled.header`
  position: fixed;
  height: 100vh;
  width: 100vw;

  background-image: url(${backgroundDog});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;
