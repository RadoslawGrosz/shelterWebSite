import styled from 'styled-components';

export const WideWrapper = styled.section`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100vw;
  margin-top: -10em;

  @media (${({ theme }) => theme.m}) {
    margin-top: -10em;
  }
`;

const ButtonSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: calc(50% - 100px);

  width: 6vmin;
  height: 12vmin;
  background-color: ${({ theme }) => theme.mainColorDark};
  color: white;
  font-size: 1.5em;

  cursor: pointer;

  & svg {
    transition: 0.3s;
  }

  @media (${({ theme }) => theme.m}) and (oriantation: portrait) {
    width: 4vmin;
    height: 8vmin;
    font-size: 3rem;
  }

  @media (${({ theme }) => theme.l}) {
    width: 5vmin;
    height: 10vmin;
    font-size: 3rem;
  }
`;

export const ButtonSlideLeft = styled(ButtonSlide)`
  right: ${(props) => (props.left ? '100%' : 0)};

  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;

  &:hover svg {
    transform: translateX(-20%);
  }
`;

export const ButtonSlideRight = styled(ButtonSlide)`
  left: ${(props) => (props.left ? 0 : '100%')};

  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;

  &:hover svg {
    transform: translateX(20%);
  }
`;

export const ButtonSlideLeftEventDetails = styled(ButtonSlideRight)`
  left: 200%;
`;
