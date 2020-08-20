import styled from 'styled-components';
import {
  xsmall, small, medium, mediumLarge, large, xLarge,
} from '../../const';

export default styled.main`
    & {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100vw;
        margin-top: 100vh;
        z-index: 1;
        background-color: #fff;
        box-shadow: 0px 5px 40px;
        @media (orientation: landscape) {
            flex-direction: row;
        }
        & .Main {
            &__title {
                width: 100%;
                text-align: center;
                margin: 5vh 0 5vh;
                padding: 0 5vw 0;
                text-transform: uppercase;
                font-size: 2.2rem;
                @media (${medium}){
                    font-size: 4rem;
                }
            }
            &__Info-container {
                margin: 5vh 0 0 0;
                padding: 5%;
                width: 60vw;
                height: 60vw;
                background-color: white;
                font-family: Rowdies;
                @media (${medium}){
                    font-size: 3.5rem;
                }
                @media (orientation: landscape) {
                    width: 30vw;
                    height: 30vw;
                }
                &__title {
                    text-transform: uppercase;
                    text-align: center;
                    padding: 3vh; 
                    border-bottom: 2px solid grey;
                }
                &__text {
                    margin-top: 5%;
                    text-align: center;
                    font-size: 2rem;
                    opacity: 0;
                    transform: translateY(50px);
                    @media (${medium}){
                    font-size: 3.5rem;
                }
                }
            }
        }
    }
`;
