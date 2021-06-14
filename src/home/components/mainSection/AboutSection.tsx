import React from 'react';
import {
  WrapperAbout as Wrapper,
  Title,
  Description,
} from '../../styles/mainSection/About';

const AboutSection = () => {
  return (
    <Wrapper>
      <Title>O nas</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus
        nisl, dictum vel sodales eget, euismod sodales neque. Vivamus eu
        lobortis leo. Praesent placerat tortor non fermentum tempus. Proin
        imperdiet orci vel imperdiet congue. Morbi quis varius lacus, sit amet
        aliquet ligula. Phasellus ornare eros vel aliquam pellentesque. Quisque
        nec semper velit. imperdiet orci vel imperdiet congue. Morbi quis varius
        lacus, sit amet aliquet ligula. Phasellus ornare eros vel aliquam
        pellentesque. Quisque nec semper velit.
      </Description>
    </Wrapper>
  );
};

export default AboutSection;
