import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (orientation: landscape) {
    flex-direction: row-reverse;
    align-items: center;
    padding: 5vw;
  }

  @media (${({ theme }) => theme.xxl}) {
    width: 60%;
    padding: 0;
  }
`;
