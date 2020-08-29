import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  margin-top: 100vh;
  padding-bottom: 6vh;
  z-index: 1;

  background-color: #020100;
  box-shadow: 0px 5px 40px;
  color: #FDFFFC;

  @media (orientation: landscape) {
    flex-direction: row;
  }
`;

export const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  margin: 5vh 0 7vh;
  padding: 0 5vw 0;
  text-transform: uppercase;
  font-size: 5.2vw;

  @media (orientation: landscape) {
    font-size: 5.2vh;
  }
`;

// Container for h2 and p
export const StyledArticle = styled.article`
  width: 60vw;
  height: 60vw;
  margin: 0 0 3vh 0;
  padding: 5%;

  /* background-color: #020100; */
  font-family: Rowdies;

  @media (orientation: landscape) {
    width: 30vw;
    height: 30vw;
  }
`;

export const StyledH2 = styled.h2`
  padding: 3vh;
  border-bottom: 2px solid grey;

  text-transform: uppercase;
  text-align: center;
  font-size: 5vw;

  @media (orientation: landscape) {
    font-size: 5vh;
  }
`;

export const StyledP = styled.p`
  margin-top: 5%;

  text-align: center;
  font-size: 4vw;

  opacity: 0;
  transform: translateY(50px);

  @media (orientation: landscape) {
    font-size: 4vh;
  }
`;
