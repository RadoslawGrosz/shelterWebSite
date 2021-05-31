import React from 'react';
import { DivAbout, H1About, PAbout } from '../../styles/StyledMainSection';

const AboutSection = () => {
  return (
    <DivAbout>
      <H1About>O nas</H1About>
      <PAbout>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus
        nisl, dictum vel sodales eget, euismod sodales neque. Vivamus eu
        lobortis leo. Praesent placerat tortor non fermentum tempus. Proin
        imperdiet orci vel imperdiet congue. Morbi quis varius lacus, sit amet
        aliquet ligula. Phasellus ornare eros vel aliquam pellentesque. Quisque
        nec semper velit.
      </PAbout>
    </DivAbout>
  );
};

export default AboutSection;
