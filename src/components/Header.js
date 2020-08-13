import React from 'react';
import headerDog800x800 from '../img/headerDog800x800.png';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledHeader } from './styles/StyledHeader';


const Header = () => {

    return ( 
    <StyledHeader className="Header" >
        <nav className="Header__nav"> 
            <a className="Header__nav__link">Jak adoptować</a>
            <a className="Header__nav__link">Kontakt</a>
        </nav>
    </StyledHeader>
    );
}
 
export default Header;

