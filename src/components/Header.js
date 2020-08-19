import React from 'react';
import StyledHeader from './styles/StyledHeader';

const Header = () => (
  <StyledHeader className="Header">
    <nav className="Header__nav">
      <button type="button" className="Header__nav__link">Jak adoptować</button>
      <button type="button" className="Header__nav__link">Kontakt</button>
    </nav>
  </StyledHeader>
);

export default Header;
