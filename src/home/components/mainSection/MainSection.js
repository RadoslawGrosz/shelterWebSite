import React from 'react';
import PropTypes from 'prop-types';
import AboutSection from './AboutSection';
import InfoSection from './InfoSection';
import PetsSection from './PetsSection';
import { StyledSection } from '../../styles/StyledMainSection';

const MainSection = ({ wrapperRef }) => {
  return (
    <StyledSection id="section">
      <AboutSection />
      <InfoSection />
      <PetsSection wrapperRef={wrapperRef} />
    </StyledSection>
  );
};

MainSection.propTypes = {
  wrapperRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
  // ButtonPanel: PropTypes.func,
};

MainSection.defaultProps = {
  wrapperRef: null,
  // ButtonPanel: () => {},
};

export default MainSection;
