import React from 'react';
import { StyledSection } from './styles/StyledSection'

const Section = () => {

    return ( 
    <StyledSection className="Section">
        <h1 className="Section__title">Adopcja w trzech krokach</h1>
        <article className="Section__Info-container">
            <h2 className="Section__Info-container__title">Krok 1</h2>
            <p className="Section__Info-container__text">skontaktuj sie z nami</p>
        </article>
        <article className="Section__Info-container">
            <h2 className="Section__Info-container__title">Krok 2</h2>
            <p className="Section__Info-container__text">Podpisz dokumenty</p>
        </article>
        <article className="Section__Info-container">
            <h2 className="Section__Info-container__title">Krok 3</h2>
            <p className="Section__Info-container__text">Zabierz psa do domu</p>
        </article>
    </StyledSection>
    );
}
 
export default Section;