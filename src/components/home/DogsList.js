import React from 'react';
import {
  StyledDiv,
  ImageContainer,
  StyledArticle,
  StyledH2,
  StyledP,
  Spinner,
} from './styles/StyledSection';

const DogsList = ({ data, isAllDataLoaded }) => {
  return (
    <>
      {data.map(({ images, name, description }) => (
        <StyledDiv>
          <ImageContainer src={images[0].source} />
          <StyledArticle>
            <StyledH2>{name}</StyledH2>
            <StyledP>{description}</StyledP>
          </StyledArticle>
        </StyledDiv>
      ))}
      {!isAllDataLoaded ? <Spinner /> : null}
    </>
  );
};

export default DogsList;
