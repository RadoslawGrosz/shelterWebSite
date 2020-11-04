import React, { useEffect, useState, useRef } from 'react';
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

const Section = ({ wrapperRef, ButtonPanel }) => {
  const sectionRef = useRef(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);
  const [data, setData] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(null);
  const [isDataRequest, setIsDataRequest, isAllDataLoaded] = useFetchData(
    setData, sectionRef,
  );
  useTriggerFetchData(wrapperRef, setIsDataRequest, setCurrentOffset);

  const handleGallery = (index) => {
    setCurrentGallery(index);
    setIsGalleryOpen(true);
  };

  useEffect(() => {
    const createImageList = () => {
      const mainImg = data[currentGallery].images.find((image) => image.isMain);
      const tempList = data[currentGallery].images.filter(
        ({ big }) => big !== mainImg.big,
      );
      tempList.unshift(mainImg);
      setImageList(tempList);
    };
    if (data[currentGallery]) createImageList();
  }, [data, currentGallery]);

  useEffect(() => {
    window.scrollTo(0, currentOffset);
  }, [data]);

  return (
    <StyledSection id="section" ref={sectionRef}>
      <StyledH1>Psy do adopcji</StyledH1>
      {!isDataRequest || isAllDataLoaded ? null : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {data.map(({
        id, images, name, description,
      }, index) => (
        <ArticleList
          key={id}
          id={id}
          index={index}
          image={images[0] ? images.find((img) => img.isMain) : {}}
          name={name}
          description={description}
          handleGallery={handleGallery}
          ButtonPanel={ButtonPanel}
        />
      ))}
      {isGalleryOpen && (
        <ImageGallery
          imageList={imageList.map(({ big }) => big)}
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
  ButtonPanel: PropTypes.func,
};

Section.defaultProps = {
  wrapperRef: null,
  ButtonPanel: () => {},
};

export default Section;
