import React, { useEffect, useState } from 'react';
import { StyledSection, StyledDiv } from './styles/StyledSection';

const Section = () => {
  const [image, setImage] = useState(null);

  const getDogImg = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();

      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  useEffect(() => {
    getDogImg().then((data) => {
      setImage(data.message);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getDogImg().then((data) => {
        setImage(data.message);
      });
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <StyledSection>
      <StyledDiv bgc={image} />
    </StyledSection>
  );
};

export default Section;
