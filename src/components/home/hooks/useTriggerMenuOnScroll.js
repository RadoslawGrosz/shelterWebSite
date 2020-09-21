import { useEffect, useState } from 'react';

const useTriggerMenuOnScroll = (menu) => {
  const [isMenuTriggered, setIsMenuTriggered] = useState(false);

  const changeMenu = () => {
    const MenuHeight = menu.current.offsetHeight;

    if (window.scrollY >= window.innerHeight - MenuHeight) {
      setIsMenuTriggered(true);
    } else {
      setIsMenuTriggered(false);
    }
  };

  useEffect(() => {
    const listener = window.addEventListener('scroll', changeMenu);
    return () => window.removeEventListener('scroll', listener);
  });

  return [isMenuTriggered];
};

export default useTriggerMenuOnScroll;
