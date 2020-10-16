import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase, { storage } from '../../server/firebase';
import { WrapperHover } from './styles/StyledPopupConfirm';
import {
  StyledForm,
  InfoSection,
  ImageSection,
  StyledLabel,
  StyledInput,
  StyledSubmit,
  StyledFileInput,
  StyledTextarea,
  ImageContainer,
  CloseButton,
} from './styles/StyledAddingForm';

const AddingForm = ({ setIsAddingFormVisible }) => {
  const [dogName, setDogName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // Images to upload on server
  const [tempImages, setTempImages] = useState([]); // Images to show on screen

  const handleShutForm = (e) => {
    if (e.target !== e.currentTarget) return;
    e.preventDefault();
    setIsAddingFormVisible(false);
  };

  const handleImageSelect = (e) => {
    if (e.target.files[0]) {
      const url = URL.createObjectURL('e.target.files[0]');
      console.log(url);
      const { name } = e.target.files[0];
      setTempImages((prev) => [...prev, { url, name }]);
    }
  };

  // Upload file to firebase storage and add info about this file to state
  const handleFileUpload = async (file) => {
    const blob = await fetch('file.url').then((r) => r.blob());
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
            const { name } = file;
            setImages((prev) => [...prev, { url, name }]);
          });
      },
    );
  };

  const handleAddToDatabase = async () => {
    const db = firebase.firestore();
    const data = {
      name: dogName,
      description,
      images,
    };

    try {
      await db.collection('Dogs').doc(dogName).set(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tempImages.forEach((file) => handleFileUpload(file));
    handleAddToDatabase();
  };

  // When new image is uploaded, add info about this image to database
  useEffect(() => {
    if (images[0]) handleAddToDatabase();
  }, [images]);

  return (
    <WrapperHover onClick={handleShutForm}>
      <StyledForm onSubmit={handleSubmit}>
        <CloseButton onClick={handleShutForm} />
        <InfoSection>
          <StyledLabel>Podaj imie psa</StyledLabel>
          <StyledInput
            type="text"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
          />
          <StyledLabel>opisz psa</StyledLabel>
          <StyledTextarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InfoSection>
        <ImageSection>
          <StyledLabel>Dodaj zdjęcia</StyledLabel>
          <StyledFileInput type="file" onChange={handleImageSelect} />
          {tempImages.map((image) => (
            <ImageContainer src={image.url} key={image.name}>
              <CloseButton />
            </ImageContainer>
          ))}
          <StyledSubmit type="submit" />
        </ImageSection>
      </StyledForm>
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
