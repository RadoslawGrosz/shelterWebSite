import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import firebase, { storage } from '../../server/firebase';
import PopupConfirm from './PopupConfirm';
import AddingForm from './AddingForm';
import Section from '../home/Section';
import { ButtonWrapper, ButtonAdd, LogoutButton } from './styles/StyledAdmin';
import StyledWrapper from '../home/styles/StyledHome';
import { DelButton } from './styles/StyledAddingForm';

const Admin = () => {
  const [isDelAlertVisible, setIsDelAlertVisible] = useState(false);
  const [isAddingFormVisible, setIsAddingFormVisible] = useState(false);
  const [articlesToDelete, setArticlesToDelete] = useState([]);
  const wrapperRef = useRef(null);

  const hideAlert = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsDelAlertVisible(false);
  };

  const handleShowRemoveAlert = () => {
    if (articlesToDelete[0]) return setIsDelAlertVisible(true);
    return alert('Wybierz co chcesz usunąć.')
  };

  const removeArticle = () => {
    const remove = async (article) => {
      const db = firebase.firestore();
      const docRef = db.collection('Dogs').doc(article);

      try {
        const doc = await docRef.get();
        const data = await doc.data();
        data.images.forEach(async ({ name }) => {
          const fileRef = await storage.ref(`images/${article}/${name}`);
          fileRef.delete();
        });
      } catch (err) {
        throw new Error(err);
      }

      try {
        await db.collection('Dogs').doc(article).delete();
        setArticlesToDelete((prev) => {
          return prev.filter((doc) => doc !== article);
        });
      } catch (err) {
        throw new Error(err);
      }
    };

    articlesToDelete.forEach((article) => remove(article));
  };

  useEffect(() => {
    if (!articlesToDelete[0] && isDelAlertVisible) window.location.reload();
  }, [articlesToDelete, isDelAlertVisible]);

  const isArticleToggle = (id) => {
    if (articlesToDelete.find((articleId) => articleId === id)) return true;
    return false;
  };

  const handleToggleArticle = (id) => {
    const index = articlesToDelete.findIndex((articleId) => articleId === id);
    if (index !== -1) {
      setArticlesToDelete((prev) => {
        return prev.filter((doc) => doc !== id);
      });
    } else {
      setArticlesToDelete((prev) => [...prev, id]);
    }
  };

  const ButtonPanel = (id) => (
    <DelButton onClick={() => handleToggleArticle(id)}>
      {isArticleToggle(id) && (
        <FontAwesomeIcon icon={faCheck} />
      )}
    </DelButton>
  );

  return (
    <StyledWrapper ref={wrapperRef}>
      <LogoutButton onClick={() => firebase.auth().signOut()}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogoutButton>
      <Section wrapperRef={wrapperRef} ButtonPanel={ButtonPanel} />
      <ButtonWrapper>
        <ButtonAdd onClick={() => setIsAddingFormVisible(true)} bgcHover="#3aa832">
          Dodaj
        </ButtonAdd>
        <ButtonAdd onClick={handleShowRemoveAlert} bgcHover="#a83232">
          Usuń wybrane
        </ButtonAdd>
      </ButtonWrapper>
      <footer id="footer" />
      {isDelAlertVisible && (
        <PopupConfirm
          hideAlert={hideAlert}
          removeArticle={removeArticle}
          count={articlesToDelete.length}
        />
      )}
      {isAddingFormVisible && (
        <AddingForm setIsAddingFormVisible={setIsAddingFormVisible} />
      )}
    </StyledWrapper>
  );
};

export default Admin;
