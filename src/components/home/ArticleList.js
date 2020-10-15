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

const ArticleList = ({
  index,
  images,
  name,
  description,
  handleGallery,
  children,
}) => (
  <Wrapper>
    <ImageWrapper>
      <ImageContainer src={images[0] ? images[0].url : 'https://limanowa.in/app/default/assets/addons/default/anomaly/client-theme/resources/img/5f1e62b3ffc6aa692da8dc8cfb8a8ea2.jpg?v=1536035116'}>
        <ImageHover onClick={() => handleGallery(index)}>
          <h2>{name}</h2>
        </ImageHover>
      </ImageContainer>
    </ImageWrapper>
    <StyledArticle>
      {children}
      <StyledH2>{name}</StyledH2>
      <StyledP>{description}</StyledP>
    </StyledArticle>
  </Wrapper>
);

ArticleList.propTypes = {
  index: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  description: PropTypes.string,
  handleGallery: PropTypes.func,
};

ArticleList.defaultProps = {
  index: -1,
  images: [{}],
  name: '',
  description: '',
  handleGallery: () => {},
};

export default ArticleList;
