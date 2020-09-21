import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetchData from './hooks/useFetchData';
import useTriggerFetchData from './hooks/useTriggerFetchData';
import DogsList from './DogsList';
import {
  StyledH1,
  StyledSection,
  Spinner,
  SpinnerContainer,
} from './styles/StyledSection';

const Section = ({ wrapperRef }) => {
  const [data, setData] = useState([]);
  const [isDataRequest, setIsDataRequest, isAllDataLoaded] = useFetchData(setData);
  useTriggerFetchData(wrapperRef, setIsDataRequest);

  return (
    <StyledSection>
      <StyledH1>Psy do adopcji</StyledH1>
      {!isDataRequest || isAllDataLoaded ? null : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {data.map(({ images, name, description }) => (
        <DogsList
          key={name}
          images={images}
          name={name}
          description={description}
        />
      ))}
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
