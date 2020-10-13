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
  const [isDelAlertVisible, setIsDelAlertVisible] = useState(false);
  const [isAddingFormVisible, setIsAddingFormVisible] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const wrapperRef = useRef(null);
  const [data, setData] = useState([]);
  const [isDataRequest, setIsDataRequest, isAllDataLoaded] = useFetchData(setData);
  useTriggerFetchData(wrapperRef, setIsDataRequest);

  const showRemoveAlert = (e, name) => {
    setArticleToDelete(name);
    setIsDelAlertVisible(true);
  };

  const hideAlert = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsDelAlertVisible(false);
  };

  const removeArticle = async () => {
    const db = firebase.firestore();
    const docRef = db.collection('Dogs').doc(articleToDelete);

    try {
      const doc = await docRef.get();
      const data = await doc.data();
      data.images.forEach(async ({ name }) => {
        const fileRef = storage.ref(`images/${articleToDelete}/${name}`);
        await fileRef.delete();
        console.log(`file ${name} deleted`);
      });
    } catch (err) {
      console.log(err);
    }

    try {
      await db.collection('Dogs').doc(articleToDelete).delete();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledWrapper ref={wrapperRef}>
      {isDelAlertVisible && (
        <PopupConfirm
          hideAlert={hideAlert}
          removeArticle={removeArticle}
        />
      )}
      {isAddingFormVisible && (
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
        <ButtonAdd onClick={() => setIsAddingFormVisible(true)}>
          +
        </ButtonAdd>
      </ButtonWrapper>
      <footer id="footer" />
    </StyledWrapper>
  );
};

export default Admin;
