import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ImageWrapper,
  ImageContainer,
  ImageHover,
  StyledArticle,
  StyledH2,
  StyledP,
} from './styles/StyledSection';
import { StyledArticleHover } from '../admin/styles/StyledAdmin';

const DogsList = ({ images, name, description, admin, showRemoveAlert }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageContainer src={images[0].source}>
          {!admin && (
            <ImageHover>
              <h2>{name}</h2>
            </ImageHover>
          )}
        </ImageContainer>
      </ImageWrapper>
      <StyledArticle>
        <StyledH2>{name}</StyledH2>
        <StyledP>{description}</StyledP>
      </StyledArticle>
      {admin && (
        <StyledArticleHover>
          <h1 onClick={(e) => showRemoveAlert(e, name)}>usuń</h1>
        </StyledArticleHover>
      )}
    </Wrapper>
  );
};

DogsList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  description: PropTypes.string,
  admin: PropTypes.bool,
  showRemoveAlert: PropTypes.func,
};

DogsList.defaultProps = {
  images: [{}],
  name: '',
  description: '',
  admin: false,
  showRemoveAlert: () => {},
};

export default DogsList;
