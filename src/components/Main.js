import React from "react";
import StyledMain from "./styles/StyledMain";

const Main = () => {
  return (
    <StyledMain className="Main">
      <h1 className="Main__title">Adopcja w trzech krokach</h1>
      <article className="Main__Info-container">
        <h2 className="Main__Info-container__title">Krok 1</h2>
        <p className="Main__Info-container__text">skontaktuj sie z nami</p>
      </article>
      <article className="Main__Info-container">
        <h2 className="Main__Info-container__title">Krok 2</h2>
        <p className="Main__Info-container__text">Podpisz dokumenty</p>
      </article>
      <article className="Main__Info-container">
        <h2 className="Main__Info-container__title">Krok 3</h2>
        <p className="Main__Info-container__text">Zabierz psa do domu</p>
      </article>
    </StyledMain>
  );
};

export default Main;
