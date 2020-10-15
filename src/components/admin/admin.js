import React, { useState, useRef } from 'react';
import firebase, { storage } from '../../server/firebase';
import PopupConfirm from './PopupConfirm';
import AddingForm from './AddingForm';
import Section from '../home/Section';
import Footer from '../home/Footer';
import { ButtonWrapper, ButtonAdd } from './styles/StyledAdmin';
import StyledWrapper from '../home/styles/StyledHome';
import { CloseButton } from './styles/StyledAddingForm';

const Admin = () => {
  const [isDelAlertVisible, setIsDelAlertVisible] = useState(false);
  const [isAddingFormVisible, setIsAddingFormVisible] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const wrapperRef = useRef(null);

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

  const ButtonPanel = <CloseButton onClick={showRemoveAlert} />;

  return (
    <StyledWrapper ref={wrapperRef}>
      <Section
        wrapperRef={wrapperRef}
        ButtonPanel={ButtonPanel}
      />
      <ButtonWrapper>
        <ButtonAdd onClick={() => setIsAddingFormVisible(true)} />
      </ButtonWrapper>
      <Footer />
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
    </StyledWrapper>
  );
};

export default Admin;
