import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PropTypes from 'prop-types';

// const images = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ];

const ImageGallery = ({ setIsGalleryOpen, images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div>
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsGalleryOpen(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
      />
    </div>
  );
};

ImageGallery.propTypes = {
  setIsGalleryOpen: PropTypes.func,
};

ImageGallery.defaultProps = {
  setIsGalleryOpen: () => {},
};

export default ImageGallery;
