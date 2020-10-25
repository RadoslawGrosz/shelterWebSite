import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import firebase, { storage } from '../../server/firebase';
import PopupConfirm from './PopupConfirm';
import AddingForm from './AddingForm';
import Section from '../home/Section';
import Footer from '../home/Footer';
import { ButtonWrapper, ButtonAdd, LogoutButton } from './styles/StyledAdmin';
import StyledWrapper from '../home/styles/StyledHome';
import { DelButton } from './styles/StyledAddingForm';

const Admin = () => {
  const [isDelAlertVisible, setIsDelAlertVisible] = useState(false);
  const [isAddingFormVisible, setIsAddingFormVisible] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const wrapperRef = useRef(null);

  const showRemoveAlert = (id) => {
    setArticleToDelete(id);
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
        const fileRef = await storage.ref(`images/${articleToDelete}/${name}`);
        await fileRef.delete();
      });
    } catch (err) {
      throw new Error(err);
    }

    try {
      await db.collection('Dogs').doc(articleToDelete).delete();
      // window.location.reload();
    } catch (err) {
      throw new Error(err);
    }
  };

  const ButtonPanel = (id) => (
    <DelButton onClick={() => showRemoveAlert(id)}>
      <FontAwesomeIcon icon={faTrash} />
    </DelButton>
  );

  return (
    <StyledWrapper ref={wrapperRef}>
      <LogoutButton onClick={() => firebase.auth().signOut()}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogoutButton>
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
          dogName={articleToDelete}
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
