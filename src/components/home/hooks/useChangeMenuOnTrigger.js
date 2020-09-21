import { useEffect } from 'react';
import gsap from 'gsap';

const useChangeMenuOnTrigger = (menuRef, isMenuTriggered, screenOrientation) => {
  useEffect(() => {
    const menu = menuRef.current;

    if (screenOrientation === 'landscape-primary') {
      if (isMenuTriggered) {
        gsap.to(menu, { backgroundColor: 'black', color: 'white', duration: 0.3 });
      } else {
        gsap.to(menu, { backgroundColor: 'transparent', color: 'black', duration: 0.3 });
      }
    }
  }, [menuRef, isMenuTriggered, screenOrientation]);
};

export default useChangeMenuOnTrigger;
