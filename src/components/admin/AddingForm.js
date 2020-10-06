import React, { useState, useEffect } from 'react';
import firebase, { storage } from '../../server/firebase';
import { WrapperHover } from './styles/StyledPopupConfirm';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
} from './styles/StyledAddingForm';

const AddingForm = ({ setIsAddingFormVisible }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [tempImages, setTempImages] = useState([]);
  // const [data, setData] = useState([]);

  const handleShutForm = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsAddingFormVisible(false);
  };

  const handleSubmit = () => {
    const db = firebase.firestore();
    const data = {
      name,
      description,
      images,
    };
  };

  const handleImageSelect = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      const temp = [e.target.files[0]];
      setImages(temp);
    }
    // if (e.target.files[0]) {
    //   try {
    //     await setFile(e.target.files[0]);
    //     await console.log(file);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // e.target.files.forEach((file) => console.log(file));
    // for (const file in e.target.files) {
    //   console.log(file);
    //   // use yield
    // }
    // console.log(e.target.files[0]);
  };

  // useEffect(() => {
  //   setImages((prev) => [...prev, file]);
  // }, [file]);

  useEffect(() => {
    const handleFileUpload = (e) => {
      // e.preventDefault();
      const uploadTask = storage.ref(`temp/${file.name}`).put(file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref('temp')
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              const { name: fileName } = file;
              setTempImages((prev) => [...prev, { url, fileName }]);
            });
        },
      );
    };
    if (file) handleFileUpload();
  }, [file]);

  return (
    <WrapperHover onClick={handleShutForm}>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Podaj imie psa</StyledLabel>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledLabel>opisz psa</StyledLabel>
        <StyledTextarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledLabel>Dodaj zdjęcie</StyledLabel>
        <StyledInput type="file" onChange={handleImageSelect} />
        <StyledInput type="submit" />
      </StyledForm>
    </WrapperHover>
  );
};

export default AddingForm;
