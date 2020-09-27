import React, { useState, useRef } from 'react';
import { storage } from '../../server/firebase';
import useFetchData from '../home/hooks/useFetchData';
import firebase from '../../server/firebase';
import useTriggerFetchData from '../home/hooks/useTriggerFetchData';
import DogsList from '../home/DogsList';
import PopupConfirm from './PopupConfirm';
import {
  Spinner,
  SpinnerContainer,
} from '../home/styles/StyledSection';
import { StyledWrapper, WrapperHover } from './styles/StyledAdmin';

const Admin = () => {
  const [image, setImage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const wrapperRef = useRef(null);
  const [data, setData] = useState([]);
  const [isDataRequest, setIsDataRequest, isAllDataLoaded] = useFetchData(setData);
  useTriggerFetchData(wrapperRef, setIsDataRequest);

  const handleFileSelect = (e) => {
    if (e.target.files[0]) setImage(e.target.files[0]);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      },
    );
  };

  const handleFileDelete = (e) => {
    e.preventDefault();
    const desertRef = storage.ref().child(`images/${image.name}`);

    desertRef.delete().then(() => {
      console.log('file deleted!');
    }).catch((error) => {
      console.log('wystąpił błąd!');
    });
  };

  const handleImageNameChange = () => {

  };

  const showRemoveAlert = (e, name) => {
    setArticleToDelete(name);
    setIsAlertVisible(true);
  };

  const hideAlert = () => {
    setIsAlertVisible(false);
  };

  const removeArticle = () => {
    const db = firebase.firestore();

    // db.collection("cities").doc(articleToDelete).delete().then(function() {
    //   console.log("Document successfully deleted!");
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });
  };

  return (
    <StyledWrapper ref={wrapperRef}>
      {isAlertVisible && (
        <PopupConfirm
          hideAlert={hideAlert}
          removeArticle={removeArticle}
        />
      )}

      {/* <WrapperHover
        isAlertVisible={isAlertVisible}
        onClick={hideAlert}
      >
        <div>
          <h2>Czy na pewno chcesz usunąć?</h2>
          <p>Usunięte zostano wszystkie informacje na temat.</p>
          <button onClick={removeArticle}>Tak</button>
          <button onClick={hideAlert}>Nie</button>
        </div>
      </WrapperHover> */}

      {/* <div>Strona admina</div>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileSelect} />
        <input type="submit" />
      </form>
      <form onSubmit={handleFileDelete}>
        <input type="text" value={image && image.name} onChange={handleImageNameChange} />
        <input type="submit" />
      </form> */}
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
          admin={true}
          showRemoveAlert={showRemoveAlert}
        />
      ))}
      <footer id="footer" />
    </StyledWrapper>
  );
};

export default Admin;
