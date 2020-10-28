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

const ArticleList = ({
  id,
  index,
  images,
  name,
  description,
  handleGallery,
  ButtonPanel,
}) => (
  <Wrapper>
    <ImageWrapper>
      <ImageContainer
        src={
          images[images.findIndex((image) => image.isMain)]
            ? images[images.findIndex((image) => image.isMain)]
            : 'https://limanowa.in/app/default/assets/addons/default/anomaly/client-theme/resources/img/5f1e62b3ffc6aa692da8dc8cfb8a8ea2.jpg?v=1536035116'
        }
      >
        {/* <source
          srcSet={images[images.findIndex((image) => image.isMain)]
            && images[images.findIndex((image) => image.isMain)].big}
          media="(min-width: 800px)"
        />
        <img src="/media/cc0-images/painted-hand-298-332.jpg" alt="" /> */}
        <ImageHover onClick={() => handleGallery(index)}>
          <StyledH2>{name}</StyledH2>
        </ImageHover>
      </ImageContainer>
    </ImageWrapper>
    <StyledArticle>
      {ButtonPanel(id)}
      <StyledH2>{name}</StyledH2>
      <StyledP>{description}</StyledP>
    </StyledArticle>
  </Wrapper>
);

ArticleList.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  description: PropTypes.string,
  handleGallery: PropTypes.func,
  ButtonPanel: PropTypes.func,
};

ArticleList.defaultProps = {
  id: '',
  index: -1,
  images: [{}],
  name: '',
  description: '',
  handleGallery: () => {},
  ButtonPanel: () => {},
};

export default ArticleList;
