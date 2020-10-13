import React, { useState, useEffect } from 'react';
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
  const [images, setImages] = useState([]);
  const [tempImages, setTempImages] = useState([]);

  const handleShutForm = (e) => {
    if (e.target !== e.currentTarget) return;
    e.preventDefault();
    setIsAddingFormVisible(false);
  };

  const handleImageSelect = (e) => {
    if (e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      const { name } = e.target.files[0];
      setTempImages((prev) => [...prev, { url, name }]);
    }
  };

  const handleFileUpload = async (file) => {
    const blob = await fetch(file.url).then((r) => r.blob());
    const uploadTask = storage.ref(`images/${dogName}/${file.name}`).put(blob);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
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

export default AddingForm;
