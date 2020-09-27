import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { StyledFooter, StyledLink } from './styles/StyledFooter';

const Footer = () => (
  <StyledFooter id="footer">
    <StyledLink>
      <FontAwesomeIcon icon={faFacebook} />
      <p>Facebook</p>
    </StyledLink>
  </StyledFooter>
);

export default Footer;
