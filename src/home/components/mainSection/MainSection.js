import React from 'react';
import PropTypes from 'prop-types';
import AboutSection from './AboutSection';
import EventsSection from './EventsSection';
import VolunteerInfoSection from './VolunteerInfoSection';
import PetsSection from './PetsSection';
import {
  StyledH1,
  StyledSection,
  InfoWrapper,
} from '../../styles/StyledMainSection';

const MainSection = ({ wrapperRef }) => {
  return (
    <StyledSection id="section">
      <AboutSection />
      <InfoWrapper>
        <EventsSection />
        <VolunteerInfoSection />
      </InfoWrapper>
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
