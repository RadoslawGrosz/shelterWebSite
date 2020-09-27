import { useEffect } from 'react';

const useTriggerFetchData = (triggerRef, isTriggered) => {
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

  useEffect(() => {
    const listener = window.addEventListener('load', handleScroll);
    return () => window.removeEventListener('load', listener);
  });
};

export default useTriggerFetchData;
