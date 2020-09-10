import React, { useEffect, useState } from 'react';
import firebase from '../../server/firebase';
import DogsList from './DogsList';
import { StyledH1, StyledSection, Spinner } from './styles/StyledSection';

const Section = () => {
  const [data, setData] = useState([]);
  const [lastData, setLastData] = useState(null);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

  const getData = () => {
    if (isAllDataLoaded) return;
    const db = firebase.firestore();
    let next = null;
    if (lastData) {
      next = db.collection('Dogs').startAfter(lastData).limit(1);
    } else {
      next = db.collection('Dogs').limit(1);
    }

    next.get().then((documentSnapshots) => {
      if (documentSnapshots.empty) setIsAllDataLoaded(true);
      documentSnapshots.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });
      setLastData(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledSection>
      <StyledH1 onClick={getData}>Psy do adopcji</StyledH1>
      <DogsList data={data} isAllDataLoaded={isAllDataLoaded} />
    </StyledSection>
  );
};

export default Section;
