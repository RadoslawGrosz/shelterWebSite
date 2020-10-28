/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudUploadAlt,
  faTrash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Resizer from 'react-image-file-resizer';
import firebase, { storage } from '../../server/firebase';
import { WrapperHover } from './styles/StyledPopupConfirm';
import {
  StyledForm,
  InfoSection,
  ImageSection,
  StyledInput,
  StyledSubmit,
  StyledFileInput,
  StyledTextarea,
  ImageContainer,
  CloseButton,
  FileUploadButton,
  ImageWrapper,
  FormWrapper,
  UploadingMessage,
  Info,
} from './styles/StyledAddingForm';

const AddingForm = ({ setIsAddingFormVisible }) => {
  const [dogName, setDogName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // Images to upload on server
  const [tempImages, setTempImages] = useState([]); // Images to show on screen
  const [isUploading, setIsUploading] = useState(false);
  const [mainPictureName, setMainPictureName] = useState(null);
  const [documentId, setDocumentId] = useState('');

  const resizeFile = (file, width, height) => new Promise((resolve) => {
    Resizer.imageFileResizer(file, width, height, 'JPEG', 100, 0,
      (uri) => {
        resolve(uri);
      },
      'base64');
  });

  const handleCloseForm = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsAddingFormVisible(false);
  };

  const handleCloseFormButton = (e) => {
    e.preventDefault();
    setIsAddingFormVisible(false);
  };

  const handleDelTempImage = (index) => {
    setTempImages((prev) => {
      const tempArray = prev.filter((image, i) => i !== index);
      if (prev[index].isMain && prev.length >= 2) {
        tempArray[0].isMain = true;
        setMainPictureName(tempArray[0].name);
      } else if (prev.length <= 1) {
        setMainPictureName(null);
      }
      return tempArray;
    });
  };

  const handleImageSelect = async (e) => {
    if (e.target.files[0]) {
      if (tempImages.find(({ name }) => name === e.target.files[0].name)) {
        return alert('Zdjęcie o tej samej nazwie jest już dodane');
      }
      const file = e.target.files[0];
      const { name } = file;

      const url = URL.createObjectURL(file);
      const urlBig = await resizeFile(file, 1920, 1080);
      const urlMedium = await resizeFile(file, 720, 480);
      const urlSmall = await resizeFile(file, 420, 360);

      let isMain = false;
      if (!tempImages.length) {
        isMain = true;
        setMainPictureName(name);
      }
      setTempImages((prev) => [...prev, { isMain, name, url, urlSmall, urlMedium, urlBig }]);
    }
  };

  // Upload file to firebase storage and add info about this file to state
  const handleFileUpload = async (file, index) => {
    const upload = (blob, size, isMain, name) => {
      const imageName = `${size}-${name}`;
      const uploadTask = storage.ref(`images/${documentId}/${name}/${imageName}`).put(blob);
      uploadTask.on(
        'state_changed',
        () => {},
        (err) => {
          throw new Error(err);
        },
        () => {
          storage
            .ref(`images/${documentId}/${name}`)
            .child(imageName)
            .getDownloadURL()
            .then((url) => {
              setImages((prev) => {
                const temp = prev;
                temp[index] = {
                  ...prev[index],
                  isMain,
                  name,
                  [size]: url,
                };
                return [...temp];
              });
            });
        },
      );
    };

    const { isMain, name } = file;

    const blobSmall = await fetch(file.urlSmall).then((r) => r.blob());
    const blobMedium = await fetch(file.urlMedium).then((r) => r.blob());
    const blobBig = await fetch(file.urlBig).then((r) => r.blob());

    const imagesToUpload = [
      {
        blob: blobSmall,
        size: 'small',
      },
      {
        blob: blobMedium,
        size: 'medium',
      },
      {
        blob: blobBig,
        size: 'big',
      },
    ];

    imagesToUpload.forEach(({ blob, size }) => upload(blob, size, isMain, name));
  };

  const handleAddToDatabase = async () => {
    setIsUploading(true);

    const db = firebase.firestore();
    const data = {
      name: dogName,
      description,
      images,
    };

    try {
      if (documentId) {
        await db.collection('dogs').doc(documentId).set(data);
      } else {
        const doc = await db.collection('dogs').add(data);
        setDocumentId(doc.id);
      }
      if (images.length === tempImages.length) {
        setIsUploading(false);
        setIsAddingFormVisible(false);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tempImages.length) return alert('nie wybrano żadnego zdjęcia');
    handleAddToDatabase();
  };

  // when document id is known we can send images to the proper folder is firebase storage
  useEffect(() => {
    if (documentId) tempImages.forEach((file, index) => handleFileUpload(file, index));
  }, [documentId]);

  const isDataReadyToUpload = () => {
    if (images.find((image) => Object.keys(image).length !== 5)) return false;
    return true;
  };

  // When new image is uploaded, add info about this image to database
  useEffect(() => {
    if (images[0] && isDataReadyToUpload()) handleAddToDatabase();
  }, [images]);

  const handleSetAsMain = (e, name) => {
    if (e.target !== e.currentTarget) return;
    setMainPictureName(name);
  };

  useEffect(() => {
    if (!mainPictureName) return;
    setTempImages((prev) => {
      const temp = prev.map((image) => ({ ...image, isMain: false }));
      temp[prev.findIndex((image) => image.name === mainPictureName)].isMain = true;
      return temp;
    });
  }, [mainPictureName]);

  return (
    <WrapperHover onClick={handleCloseForm}>
      <FormWrapper>
        {isUploading && (
          <UploadingMessage>
            <Info>Trwa wysyłanie czekaj...</Info>
          </UploadingMessage>
        )}
        <CloseButton onClick={handleCloseFormButton}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <StyledForm onSubmit={handleSubmit}>
          <InfoSection>
            <StyledInput
              type="text"
              value={dogName}
              placeholder="imie"
              onChange={(e) => setDogName(e.target.value)}
              maxLength="20"
              required
            />
            <StyledTextarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="dodaj opis..."
              maxLength="500"
              required
            />
          </InfoSection>
          <ImageSection>
            <FileUploadButton htmlFor="file-upload">
              <FontAwesomeIcon icon={faCloudUploadAlt} />
              <strong>Dodaj zdjęcia</strong>
            </FileUploadButton>
            <StyledFileInput
              id="file-upload"
              type="file"
              onChange={handleImageSelect}
            />
            <ImageWrapper>
              {tempImages.map((image, i) => (
                <ImageContainer
                  src={image.url}
                  key={image.name}
                  onClick={(e) => handleSetAsMain(e, image.name)}
                  isMain={image.isMain}
                >
                  <CloseButton onClick={() => handleDelTempImage(i)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </CloseButton>
                </ImageContainer>
              ))}
            </ImageWrapper>
            <StyledSubmit type="submit" />
          </ImageSection>
        </StyledForm>
      </FormWrapper>
    </WrapperHover>
  );
};

AddingForm.propTypes = {
  setIsAddingFormVisible: PropTypes.func,
};

AddingForm.defaultProps = {
  setIsAddingFormVisible: () => {},
};

export default AddingForm;
