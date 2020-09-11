import React, { useRef } from 'react';
import {
  StyledDiv,
  ImageContainer,
  StyledArticle,
  StyledH2,
  StyledP,
} from './styles/StyledSection';

const DogsList = ({ images, name, description }) => {
  return (
    <StyledDiv>
      <ImageContainer src={images[0].source} />
      <StyledArticle>
        <StyledH2>{name}</StyledH2>
        <StyledP>{description}</StyledP>
      </StyledArticle>
    </StyledDiv>
  );
};

export default DogsList;
