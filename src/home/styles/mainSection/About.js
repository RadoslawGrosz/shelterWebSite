import styled from 'styled-components';

export const WrapperAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  transform: translateY(-50%);

  width: 90%;
  padding: 2.5em 2.5em 3.5em;
  border-radius: 1rem;

  z-index: 10;
  background-color: ${({ theme }) => theme.mainColorLight};
  color: white;

  @media (${({ theme }) => theme.l}) {
    width: 80%;
    padding: 6rem;
    font-size: 1.6rem;
    line-height: 3rem;
  }

  @media (${({ theme }) => theme.xl}) {
    width: 70%;
    padding-bottom: 9rem;
    font-size: 2rem;
    line-height: 4rem;
  }

  @media (${({ theme }) => theme.xxl}) {
    width: 60%;
    padding-left: 10em;
    padding-right: 10em;
  }
`;

export const Title = styled.h1`
  flex-basis: 100%;

  text-align: center;
  font-size: 2.5em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 0.05em;
  line-height: 1.3em;

  @media (${({ theme }) => theme.l}) {
    font-size: 1em;
  }

  @media (${({ theme }) => theme.xxl}) {
    line-height: 2em;
  }
`;
