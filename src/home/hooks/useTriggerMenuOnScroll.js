import { useEffect, useState } from 'react';

const useTriggerMenuOnScroll = (menu) => {
  const [isMenuTriggered, setIsMenuTriggered] = useState(false);

  const changeMenu = () => {
    if (!menu.current) return;
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

  useEffect(() => {
    const listener = window.addEventListener('load', changeMenu);
    return () => window.removeEventListener('load', listener);
  });

  return [isMenuTriggered];
};

export default useTriggerMenuOnScroll;
