import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import { MenuWrap } from './styles/StyledMenu';

const Menu = ({ isMenuVisible }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (isMenuVisible) {
      gsap.to(menu, 0.5, { autoAlpha: 1 });
    } else {
      gsap.to(menu, 0.5, { autoAlpha: 0 });
    }
  }, [isMenuVisible]);

  return (
    <MenuWrap id="menu" ref={menuRef} />
  );
};

Menu.propTypes = {
  isMenuVisible: PropTypes.bool,
};

Menu.defaultProps = {
  isMenuVisible: false,
};

export default Menu;
