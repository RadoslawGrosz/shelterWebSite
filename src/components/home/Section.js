import React, { useEffect, useState } from 'react';
import firebase from '../../server/firebase';
import DogsList from './DogsList';
import { StyledH1, StyledSection, Spinner } from './styles/StyledSection';

const Section = () => {
  const [dogsInfo, setDogsInfo] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

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
      .then(() => setIsDataLoaded(true))
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <StyledSection>
      <StyledH1>Psy do adopcji</StyledH1>
      {isDataLoaded ? (
        <DogsList dogsInfo={dogsInfo} />
      ) : (
        <Spinner />
      )}
    </StyledSection>
  );
};

export default Section;
