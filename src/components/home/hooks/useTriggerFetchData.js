import { useEffect } from 'react';
import PropTypes from 'prop-types';

const useTriggerFetchData = (triggerRef, setIsTriggered, setCurrentOffset) => {
  const handleScroll = () => {
    if (!triggerRef.current) return;
    const { current } = triggerRef;
    const footer = current.children.namedItem('footer');
    if (
      window.scrollY + window.innerHeight
      >= footer.offsetTop + footer.offsetHeight / 2
    ) {
      setIsTriggered(true);
      setCurrentOffset(window.pageYOffset);
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

useTriggerFetchData.PropTypes = {
  triggerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default useTriggerFetchData;
