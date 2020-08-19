import React from "react";
import StyledHeader from "./styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader className="Header">
      <nav className="Header__nav">
        <button className="Header__nav__link">Jak adoptować</button>
        <button className="Header__nav__link">Kontakt</button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
