import React from 'react';
import PropTypes from 'prop-types';
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

DogsList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  description: PropTypes.string,
};

DogsList.defaultProps = {
  images: [{}],
  name: '',
  description: '',
};

export default DogsList;
