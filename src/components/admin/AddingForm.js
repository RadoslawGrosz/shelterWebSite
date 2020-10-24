import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudUploadAlt,
  faTrash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
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

  const handleCloseForm = (e) => {
    if (e.target !== e.currentTarget) return;
    // e.preventDefault();
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

  const handleImageSelect = (e) => {
    if (e.target.files[0]) {
      if (tempImages.find(({ name }) => name === e.target.files[0].name)) {
        return alert('Zdjęcie o tej samej nazwie jest już dodane');
      }
      const url = URL.createObjectURL(e.target.files[0]);
      const { name } = e.target.files[0];
      let isMain = false;
      if (!tempImages.length) {
        isMain = true;
        setMainPictureName(name);
      }
      setTempImages((prev) => [...prev, { isMain, url, name }]);
    }
  };

  // Upload file to firebase storage and add info about this file to state
  const handleFileUpload = async (file) => {
    const blob = await fetch(file.url).then((r) => r.blob());
    const uploadTask = storage.ref(`images/${dogName}/${file.name}`).put(blob);
    uploadTask.on(
      'state_changed',
      () => {},
      (err) => {
        throw new Error(err);
      },
      () => {
        storage
          .ref(`images/${dogName}`)
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            const { id, name } = file;
            setImages((prev) => [...prev, { id, url, name }]);
          });
      },
    );
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
      await db.collection('Dogs').doc(dogName).set(data);
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
    tempImages.forEach((file) => handleFileUpload(file));
  };

  // When new image is uploaded, add info about this image to database
  useEffect(() => {
    if (images[0]) handleAddToDatabase();
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
