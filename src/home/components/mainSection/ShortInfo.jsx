import React from 'react';
import EventsShort from './EventsShort';
import VolunteerInfoShort from './VolunteerInfoShort';
import WrapperInfo from '../../styles/mainSection/ShortInfo';

const ShortInfo = ({ slideCarousel }) => {
  return (
    <WrapperInfo>
      <EventsShort slideCarousel={slideCarousel} />
      <VolunteerInfoShort slideCarousel={slideCarousel} />
    </WrapperInfo>
  );
};

export default ShortInfo;
