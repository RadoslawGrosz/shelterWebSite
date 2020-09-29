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
import { StyledArticleHover, ButttonDel, ButttonEdit } from '../admin/styles/StyledAdmin';

const DogsList = ({
  index,
  images,
  name,
  description,
  admin,
  showRemoveAlert,
  handleGallery,
}) => (
  <Wrapper>
    <ImageWrapper>
      <ImageContainer src={images[0].source}>
        {!admin && (
          <ImageHover onClick={() => handleGallery(index)}>
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
        <ButttonDel onClick={(e) => showRemoveAlert(e, name)}>usuń</ButttonDel>
        <ButttonEdit onClick={(e) => showRemoveAlert(e, name)}>Edytuj</ButttonEdit>
      </StyledArticleHover>
    )}
  </Wrapper>
);

DogsList.propTypes = {
  index: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  description: PropTypes.string,
  admin: PropTypes.bool,
  showRemoveAlert: PropTypes.func,
  handleGallery: PropTypes.func,
};

DogsList.defaultProps = {
  index: -1,
  images: [{}],
  name: '',
  description: '',
  admin: false,
  showRemoveAlert: () => {},
  handleGallery: () => {},
};

export default DogsList;
