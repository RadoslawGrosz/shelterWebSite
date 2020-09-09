import React from 'react';
import {
  StyledDiv,
  ImageContainer,
  StyledArticle,
  StyledH2,
  StyledP,
} from './styles/StyledSection';

const DogsList = ({ dogsInfo }) => {
  return (
    dogsInfo.map(({ images, name, description }) => (
      <StyledDiv>
        <ImageContainer src={images[0].source} />
        <StyledArticle>
          <StyledH2>{name}</StyledH2>
          <StyledP>{description}</StyledP>
        </StyledArticle>
      </StyledDiv>
    ))
  );
};

export default DogsList;
