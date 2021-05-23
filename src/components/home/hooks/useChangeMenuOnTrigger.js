import { useEffect } from 'react';
import gsap from 'gsap';
import {
  menuLinkColor,
  menuLinkColorActive,
  menuBackgroundColor,
  menuBackgroundColorActive,
} from '../styles/StyledMenu';

const useChangeMenuOnTrigger = (menuRef, isMenuTriggered, isLandscape) => {
  useEffect(() => {
    const menu = menuRef.current;
    const MenuHeight = menu.offsetHeight;
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to(menu, {
      y: 0,
      // backgroundColor: 'transparent',
      // borderColor: 'black',
      // color: 'black',
      duration: 0,
    });

    if (isLandscape) {
      if (isMenuTriggered) {
        tl.to(menu, {
          y: 0,
          backgroundColor: menuBackgroundColorActive,
          borderColor: 'white',
          color: menuLinkColorActive,
          z: 4,
          duration: 0.3,
        });
      } else {
        tl.to(menu, {
          y: 0,
          backgroundColor: menuBackgroundColor,
          borderColor: 'black',
          color: menuLinkColor,
          duration: 0.3,
        });
      }
    } else if (isMenuTriggered) {
      tl.to(menu, {
        y: -MenuHeight - 200,
        backgroundColor: 'transparent',
        color: 'black',
      });
    } else {
      tl.to(menu, {
        y: 0,
        backgroundColor: 'transparent',
        color: 'black',
        duration: 0.3,
      });
    }
  }, [menuRef, isMenuTriggered, isLandscape]);
};

export default useChangeMenuOnTrigger;
