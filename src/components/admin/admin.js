import React, { useState, useRef } from 'react';
import firebase, { storage } from '../../server/firebase';
import useFetchData from '../home/hooks/useFetchData';
import useTriggerFetchData from '../home/hooks/useTriggerFetchData';
import ArticleList from '../home/ArticleList';
import PopupConfirm from './PopupConfirm';
import AddingForm from './AddingForm';
import {
  Spinner,
  SpinnerContainer,
} from '../home/styles/StyledSection';
import { StyledWrapper, ButtonWrapper, ButtonAdd } from './styles/StyledAdmin';

const Admin = () => {
  const [file, setFile] = useState('');
  const [isDelAlertVisible, setIsDelAlertVisible] = useState(false);
  const [isAddingFormVisible, setIsAddingFormVisible] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const wrapperRef = useRef(null);
  const [data, setData] = useState([]);
  const [isDataRequest, setIsDataRequest, isAllDataLoaded] = useFetchData(setData);
  useTriggerFetchData(wrapperRef, setIsDataRequest);

  const handleFileSelect = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const handleFileUpload = (e) => {
    let fileUrl = '';
    e.preventDefault();
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            fileUrl = url;
          });
      },
    );
    return fileUrl;
  };

  const handleFileDelete = (e) => {
    e.preventDefault();
    const desertRef = storage.ref().child(`images/${file.name}`);

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
    setIsDelAlertVisible(true);
  };

  const hideAlert = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsDelAlertVisible(false);
  };

  const removeArticle = () => {
    const db = firebase.firestore();

    db.collection('Dogs').doc(articleToDelete).delete()
      .then(() => (
        console.log('Document successfully deleted!')
      )
        .catch((error) => (
          console.error('Error removing document: ', error)
        )));

    window.location.reload();
  };

  const addArticle = () => {
    setIsAddingFormVisible(true);
    // const db = firebase.firestore();
    // const data = {
    //   name: 'imieTest3',
    //   description: 'lorem ipsum',
    //   images: [
    //     {
    //       imageName: 'image.jpg',
    //       source: 'firebase/image.jpg',
    //     },
    //   ],
    // };

    // db.collection('Dogs').doc('imieTest5').set(data)
    //   .then(() => (
    //     console.log('Document successfully written!')
    //   )
    //     .catch((error) => (
    //       console.error('Error writing document: ', error)
    //     )));
  };

  return (
    <StyledWrapper ref={wrapperRef}>
      {isDelAlertVisible && (
        <PopupConfirm
          hideAlert={hideAlert}
          removeArticle={removeArticle}
        />
      )}
      {true && (
        <AddingForm
          setIsAddingFormVisible={setIsAddingFormVisible}
        />
      )}
      {!isDataRequest || isAllDataLoaded ? null : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {data.map(({ images, name, description }) => (
        <ArticleList
          key={name}
          images={images}
          name={name}
          description={description}
          admin={true}
          showRemoveAlert={showRemoveAlert}
        />
      ))}
      <ButtonWrapper>
        <ButtonAdd onClick={addArticle}>
          +
        </ButtonAdd>
      </ButtonWrapper>
      <footer id="footer" />
    </StyledWrapper>
  );
};

export default Admin;
