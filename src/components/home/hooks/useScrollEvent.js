import { useEffect } from 'react';

const useScrollEvent = (triggerRef, isTriggered) => {
  const handleScroll = () => {
    const { current } = triggerRef;
    const footer = current.children.namedItem('footer');
    if (
      window.scrollY + window.innerHeight
      >= footer.offsetTop
    ) {
      isTriggered(true);
    }
  };

  useEffect(() => {
    const listener = window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', listener);
  });
};

export default useScrollEvent;
