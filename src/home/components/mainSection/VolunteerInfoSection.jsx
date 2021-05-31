import React from 'react';
import {
  HelpInfoWrapper,
  VolunteerInfoTitle,
  PAbout,
  VolunteerInfoSectionButton,
} from '../../styles/StyledMainSection';

const VolunteerInfoSection = () => {
  return (
    <HelpInfoWrapper>
      <VolunteerInfoTitle>Jak pomóc</VolunteerInfoTitle>
      <PAbout>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus
        nisl, dictum vel sodales eget, euismod sodales neque. Vivamus eu
        lobortis leo. Praesent placerat tortor non fermentum tempus. Proin
        imperdiet orci vel imperdiet congue. Morbi quis varius lacus, sit amet
        aliquet ligula. Phasellus ornare eros vel aliquam. Morbi quis varius
        lacus, sit amet aliquet ligula. Phasellus ornare eros vel aliquam
      </PAbout>
      <VolunteerInfoSectionButton variant="contained">
        dowiedz się więcej
      </VolunteerInfoSectionButton>
    </HelpInfoWrapper>
  );
};

export default VolunteerInfoSection;
