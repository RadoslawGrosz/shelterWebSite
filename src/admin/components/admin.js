import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import firebase, { storage } from '../../server/firebase';
import PopupConfirm from './PopupConfirm';
import AddingForm from './AddingForm';
import MainSection from '../../home/components/mainSection/MainSection';
import PetsSection from '../../home/components/mainSection/PetsSection';
import { ButtonWrapper, ButtonAdd, LogoutButton } from '../styles/StyledAdmin';
import StyledWrapper from '../../home/styles/StyledHome';
import { DelButton } from '../styles/StyledAddingForm';

const Admin = () => {
  const [isDelAlertVisible, setIsDelAlertVisible] = useState(false);
  const [isAddingFormVisible, setIsAddingFormVisible] = useState(false);
  const [articlesToDelete, setArticlesToDelete] = useState([]);
  const wrapperRef = useRef(null);

  // alert to prevent missclick
  const hideAlert = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsDelAlertVisible(false);
  };

  const handleShowRemoveAlert = () => {
    if (articlesToDelete[0]) return setIsDelAlertVisible(true);
    return alert('Wybierz co chcesz usunąć.');
  };

  const removeArticle = () => {
    const remove = async (article) => {
      const db = firebase.firestore();
      const docRef = db.collection('dogs').doc(article);

      try {
        const doc = await docRef.get();
        const data = await doc.data();
        data.images.forEach(async ({ name }) => {
          const sizes = ['small', 'medium', 'big'];
          sizes.forEach(async (size) => {
            try {
              const fileRef = await storage.ref(
                `images/${article}/${name}/${size}-${name}`,
              );
              fileRef.delete();
            } catch (err) {
              throw new Error(err);
            }
          });
        });
      } catch (err) {
        throw new Error(err);
      }

      try {
        await db.collection('dogs').doc(article).delete();
        setArticlesToDelete((prev) => prev.filter((doc) => doc !== article));
      } catch (err) {
        throw new Error(err);
      }
    };

    articlesToDelete.forEach((article) => remove(article));
  };

  const isArticleToggle = (id) => {
    if (articlesToDelete.find((articleId) => articleId === id)) return true;
    return false;
  };

  const handleToggleArticle = (id) => {
    const index = articlesToDelete.findIndex((articleId) => articleId === id);
    if (index !== -1) {
      setArticlesToDelete((prev) => prev.filter((doc) => doc !== id));
    } else {
      setArticlesToDelete((prev) => [...prev, id]);
    }
  };

  const ButtonPanel = (id) => (
    <DelButton onClick={() => handleToggleArticle(id)}>
      {isArticleToggle(id) && <FontAwesomeIcon icon={faCheck} />}
    </DelButton>
  );

  return (
    <StyledWrapper ref={wrapperRef}>
      <LogoutButton onClick={() => firebase.auth().signOut()}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogoutButton>
      <PetsSection wrapperRef={wrapperRef} ButtonPanel={ButtonPanel} />
      <ButtonWrapper>
        <ButtonAdd
          onClick={() => setIsAddingFormVisible(true)}
          bgcHover="#3aa832"
        >
          Dodaj
        </ButtonAdd>
        <ButtonAdd onClick={handleShowRemoveAlert} bgcHover="#a83232">
          Usuń wybrane
        </ButtonAdd>
      </ButtonWrapper>
      <footer id="footer" style={{ minHeight: '5rem' }} />
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
