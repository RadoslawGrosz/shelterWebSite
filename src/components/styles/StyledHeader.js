import styled from 'styled-components';
import backgroundDog from '../../img/backgroundDog.jpg';
import {
  xsmall, small, medium, mediumLarge, large, xLarge,
} from '../../const';

export default styled.header`
  & {
    position: fixed;
    height: 100vh;
    width: 100vw;
    padding: 5vh;

    background-image: url(${backgroundDog});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;

    & .Header {
      &__nav {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 30vh;

        &__link {
          background-color: transparent;
          outline: none;
          color: black;
          padding: 5px;
          text-decoration: none;
          border: none;
          border-bottom: 3px solid black;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: 0.3s;
          font-size: 2rem;
          cursor: pointer;
          z-index: 1;

          &:nth-child(1) {
            margin-right: auto;
            opacity: 0;
            transform: translateX(-50px);
          }
          &:nth-child(2) {
            margin-left: auto;
            opacity: 0;
            transform: translateX(50px);
          }
          &:hover {
            letter-spacing: 3px;
          }
          @media (${xsmall}) {
            font-size: 2.5rem;
          }

          @media (${small}) {
            font-size: 4rem;
          }

          @media (${medium}) {
            font-size: 5rem;
          }

          @media (${large}) {
            font-size: 7rem;
          }

          @media (orientation: landscape) {
            @media (${small}) {
              font-size: 3rem;
            }

            @media (${mediumLarge}) {
              font-size: 5.5rem;
            }

            @media (${large}) {
              font-size: 7rem;
            }
          }
        }
        @media (orientation: landscape) {
          flex-direction: row;
          align-items: flex-start;
        }
      }
    }
  }
`;
