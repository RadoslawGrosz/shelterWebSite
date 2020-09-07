import React, { useEffect, useState } from 'react';
import firebase from '../../server/firebase';
import DogsList from './DogsList';
import { StyledH1, StyledSection } from './styles/StyledSection';

const Section = () => {
  const [dogsInfo, setDogsInfo] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const docRef = db.collection('Dogs').doc('dogInfo');

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDogsInfo((prev) => [...prev, ...doc.data().dogs]);
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <StyledSection>
      <StyledH1>Psy do adopcji</StyledH1>
      {dogsInfo && <DogsList dogsInfo={dogsInfo} />}
    </StyledSection>
  );
};

export default Section;
