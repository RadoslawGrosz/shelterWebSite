import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ImageWrapper,
  ImageContainer,
  ImageHover,
  StyledArticle,
  StyledArticleScroll,
  StyledH2,
  StyledP,
} from './styles/StyledMainSection';

const ArticleList = ({
  id,
  index,
  image,
  name,
  description,
  handleGallery,
  ButtonPanel,
}) => (
  <Wrapper>
    <ImageWrapper src={image}>
      <ImageContainer src={image}>
        <ImageHover onClick={() => handleGallery(index)}>
          <StyledH2>{name}</StyledH2>
        </ImageHover>
      </ImageContainer>
    </ImageWrapper>
    <StyledArticle>
      <StyledArticleScroll>
        {ButtonPanel(id)}
        <StyledH2>{name}</StyledH2>
        <StyledP>{description}</StyledP>
      </StyledArticleScroll>
    </StyledArticle>
  </Wrapper>
);

ArticleList.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  image: PropTypes.shape({
    isMain: PropTypes.bool,
    name: PropTypes.string,
    small: PropTypes.string,
    medium: PropTypes.string,
    big: PropTypes.string,
  }),
  name: PropTypes.string,
  description: PropTypes.string,
  handleGallery: PropTypes.func,
  ButtonPanel: PropTypes.func,
};

ArticleList.defaultProps = {
  id: '',
  index: -1,
  image: {},
  name: '',
  description: '',
  handleGallery: () => {},
  ButtonPanel: () => {},
};

export default ArticleList;
