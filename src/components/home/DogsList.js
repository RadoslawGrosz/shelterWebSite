import React from 'react';
import {
  StyledDiv,
  StyledImg,
  StyledArticle,
  StyledH2,
  StyledP,
} from './styles/StyledSection';

const DogsList = ({ dogsInfo }) => {
  return (
    dogsInfo.map(({ images, name, description }) => (
      <StyledDiv>
        <StyledImg
          src={images[0].source}
          alt={images[0].imageName}
        />
        <StyledArticle>
          <StyledH2>{name}</StyledH2>
          <StyledP>{description}</StyledP>
        </StyledArticle>
      </StyledDiv>
    ))
  );
};

export default DogsList;
