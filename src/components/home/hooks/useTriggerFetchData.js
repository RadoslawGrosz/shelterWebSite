import { useEffect } from 'react';
import PropTypes from 'prop-types';

const useTriggerFetchData = (triggerRef, isTriggered) => {
  const handleScroll = () => {
    if (!triggerRef.current) return;
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

useTriggerFetchData.PropTypes = {
  triggerRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default useTriggerFetchData;
