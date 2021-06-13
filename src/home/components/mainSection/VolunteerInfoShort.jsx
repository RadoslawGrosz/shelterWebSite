import React from 'react';
import {
  WrapperVolunteer,
  VolunteerInfoTitle,
  DescriptionVolunteer,
  VolunteerInfoSectionButton,
} from '../../styles/mainSection/Volunteer';

const VolunteerInfoShort = ({ slideCarousel }) => {
  return (
    <WrapperVolunteer>
      <VolunteerInfoTitle>Jak pomóc</VolunteerInfoTitle>
      <DescriptionVolunteer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus
        nisl, dictum vel sodales eget, euismod sodales neque. Vivamus eu
        lobortis leo. Praesent placerat tortor non fermentum tempus. Proin
        imperdiet orci vel imperdiet congue. Morbi quis varius lacus, sit amet
        aliquet ligula. Phasellus ornare eros vel aliquam. Morbi quis varius
        lacus, sit amet aliquet ligula. Phasellus ornare eros vel aliquam
      </DescriptionVolunteer>
      <VolunteerInfoSectionButton
        variant="contained"
        onClick={() => slideCarousel()}
      >
        dowiedz się więcej
      </VolunteerInfoSectionButton>
    </WrapperVolunteer>
  );
};

export default VolunteerInfoShort;
