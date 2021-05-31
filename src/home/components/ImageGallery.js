import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ setIsGalleryOpen, imageList }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const placeHolderImg =
    'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6';

  return (
    <div>
      <Lightbox
        mainSrc={imageList[0] ? imageList[photoIndex] : placeHolderImg}
        nextSrc={imageList[(photoIndex + 1) % imageList.length]}
        prevSrc={
          imageList[(photoIndex + imageList.length - 1) % imageList.length]
        }
        onCloseRequest={() => setIsGalleryOpen(false)}
        onMovePrevRequest={() => {
          setPhotoIndex((photoIndex + imageList.length - 1) % imageList.length);
        }}
        onMoveNextRequest={() => {
          setPhotoIndex((photoIndex + 1) % imageList.length);
        }}
      />
    </div>
  );
};

ImageGallery.propTypes = {
  setIsGalleryOpen: PropTypes.func,
  imageList: PropTypes.arrayOf(PropTypes.string),
};

ImageGallery.defaultProps = {
  setIsGalleryOpen: () => {},
  imageList: [''],
};

export default ImageGallery;
