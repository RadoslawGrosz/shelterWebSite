import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetchData from './hooks/useFetchData';
import useTriggerFetchData from './hooks/useTriggerFetchData';
import DogsList from './DogsList';
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
  const [images, setImages] = useState([]);
  const [isDataRequest, setIsDataRequest, isAllDataLoaded] = useFetchData(setData);
  useTriggerFetchData(wrapperRef, setIsDataRequest);

  const handleGallery = (index) => {
    setCurrentGallery(index);
    setIsGalleryOpen(true);
  };

  useEffect(() => {
    const createImageList = () => {
      const imagesList = [];
      data[currentGallery].images.forEach(({ source }) => imagesList.push(source));
      setImages(imagesList);
    };
    if (data[currentGallery]) createImageList();
  }, [data, currentGallery]);

  return (
    <StyledSection>
      <StyledH1>Psy do adopcji</StyledH1>
      {!isDataRequest || isAllDataLoaded ? null : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {data.map(({ images, name, description }, index) => (
        <DogsList
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
          images={images}
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
