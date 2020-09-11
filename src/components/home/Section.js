import React, { useEffect, useState, useRef } from 'react';
import firebase from '../../server/firebase';
import DogsList from './DogsList';
import { StyledH1, StyledSection, Spinner, SpinnerContainer } from './styles/StyledSection';

const Section = () => {
  const [data, setData] = useState([]);
  const [lastDocumentSnapshot, setLastDocumentSnapshot] = useState(null);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);
  const [isDataRequest, setIsDataRequest] = useState(true);
  const sectionRef = useRef(null);

  // const getData = () => {
  //   if (isAllDataLoaded) return;
  //   const db = firebase.firestore();
  //   let colRef = null;
  //   if (lastDocumentSnapshot) {
  //     colRef = db.collection('Dogs').startAfter(lastDocumentSnapshot).limit(1);
  //   } else {
  //     colRef = db.collection('Dogs').limit(1);
  //   }

  //   colRef.get().then((documentSnapshots) => {
  //     if (documentSnapshots.empty) setIsAllDataLoaded(true);
  //     documentSnapshots.forEach((doc) => {
  //       setData((prev) => [...prev, doc.data()]);
  //     });
  //     if (lastDocumentSnapshot === documentSnapshots.docs[documentSnapshots.docs.length - 1]) {
  //       setIsAllDataLoaded(true);
  //       return;
  //     }
  //     setLastDocumentSnapshot(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
  //   });
  // };

  useEffect(() => {
    const getData = () => {
      if (isAllDataLoaded) return;
      const db = firebase.firestore();
      let colRef = null;
      if (lastDocumentSnapshot) {
        colRef = db.collection('Dogs').startAfter(lastDocumentSnapshot).limit(2);
      } else {
        colRef = db.collection('Dogs').limit(2);
      }

      colRef.get().then((documentSnapshots) => {
        documentSnapshots.forEach((doc) => {
          setData((prev) => [...prev, doc.data()]);
        });
        setLastDocumentSnapshot(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
        return documentSnapshots.docs[documentSnapshots.docs.length - 1];
      })
        .then((lastDocument) => {
          const next = db.collection('Dogs').startAfter(lastDocument).limit(1);
          next.get().then((nextDocumentSnapshots) => {
            if (nextDocumentSnapshots.empty) setIsAllDataLoaded(true);
            setIsDataRequest(false);
          });
        });
    };
    if (isDataRequest) getData();
  }, [isDataRequest]);

  const handleScroll = () => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.children;
    const lastEl = elements[elements.length - 1];

    if (window.scrollY + window.innerHeight >= lastEl.offsetTop
     && window.scrollY + window.innerHeight <= lastEl.offsetTop + lastEl.offsetHeight) {
      setIsDataRequest(true);
    }
  };

  useEffect(() => {
    const listener = window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', listener);
  });

  return (
    <StyledSection ref={sectionRef}>
      <StyledH1>Psy do adopcji</StyledH1>
      {isAllDataLoaded ? null : <SpinnerContainer><Spinner /></SpinnerContainer>}
      {data.map(({ images, name, description }) => (
        <DogsList
          key={name}
          images={images}
          name={name}
          description={description}
        />
      ))}
    </StyledSection>
  );
};

export default Section;
