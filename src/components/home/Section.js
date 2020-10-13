import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetchData from './hooks/useFetchData';
import useTriggerFetchData from './hooks/useTriggerFetchData';
import ArticleList from './ArticleList';
import ImageGallery from './ImageGallery';
import {
  StyledH1,
  StyledSection,
  Spinner,
  SpinnerContainer,
} from './styles/StyledSection';

const Section = ({ wrapperRef }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);
  const [data, setData] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [isDataRequest, setIsDataRequest, isAllDataLoaded] = useFetchData(setData);
  useTriggerFetchData(wrapperRef, setIsDataRequest);

  const handleGallery = (index) => {
    setCurrentGallery(index);
    setIsGalleryOpen(true);
  };

  useEffect(() => {
    const createImageList = () => {
      const imagesList = [];
      data[currentGallery].images.forEach(({ url }) => imagesList.push(url));
      setImageList(imagesList);
    };
    if (data[currentGallery]) createImageList();
  }, [data, currentGallery]);

  return (
    <StyledSection id="section">
      <StyledH1>Psy do adopcji</StyledH1>
      {!isDataRequest || isAllDataLoaded ? null : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {data.map(({ images, name, description }, index) => (
        <ArticleList
          key={name}
          index={index}
          images={images}
          name={name}
          description={description}
          handleGallery={handleGallery}
        />
      ))}
      {isGalleryOpen && (
        <ImageGallery
          imageList={imageList}
          setIsGalleryOpen={setIsGalleryOpen}
        />
      )}
    </StyledSection>
  );
};

Section.propTypes = {
  wrapperRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
};

Section.defaultProps = {
  wrapperRef: null,
};

export default Section;
