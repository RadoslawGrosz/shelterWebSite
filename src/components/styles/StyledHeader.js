import style from 'styled-components';
import backgroundPortrait from '../../img/background-portrait.jpg';
import backgroundDog from '../../img/backgroundDog.jpg'

const xsmall = 'min-width: 360px';
const small = 'min-width: 460px';
const medium = 'min-width: 640px';
const mediumLarge = 'min-width: 860px';
const large = 'min-width: 1024px';
const xLarge = 'min-width: 1440px';

export const StyledHeader = style.header`

    position: fixed;
    height: 100vh;
    width: 100vw;
    padding: 5vh;

    background-image: url(${backgroundDog});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;

    @media (orientation: landscape){
        background-size: cover;
    }

    .Header{
        &__cover {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            transition: 0.3s;

        }
        &__nav {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;

            height: 30vh;
            font-size: 30px;

            &__link{
                padding: 5px;
                border-bottom: 3px solid black;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: .3s;
                cursor: pointer;
                z-index: 1;

                &:nth-child(1){
                    margin-right: auto;
                }
                &:nth-child(2){
                    margin-left: auto;
                }

                &:hover {
                    letter-spacing: 3px;
                }
            }
            @media (orientation: landscape) {
                flex-direction: row;
                align-items: flex-start;
            }
        }
    }   
`;