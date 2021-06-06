import { useState, useEffect } from 'react';

const useScreenOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia('(orientation: landscape)').matches,
  );

  const handleOrientationChange = () => {
    setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
  };

  useEffect(() => {
    const listener = window.addEventListener(
      'orientationchange',
      handleOrientationChange,
    );
    return () => window.removeEventListener('orientationchange', listener);
  });

  useEffect(() => {
    const listener = window.addEventListener('resize', handleOrientationChange);
    return () => window.removeEventListener('resize', listener);
  });

  return isLandscape;
};

export default useScreenOrientation;
