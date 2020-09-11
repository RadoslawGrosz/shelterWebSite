import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../server/firebase';
import DogsList from './DogsList';
import {
  StyledH1,
  StyledSection,
  Spinner,
  SpinnerContainer,
} from './styles/StyledSection';

const Section = ({ wrapperRef }) => {
  const [data, setData] = useState([]);
  const [lastDocumentSnapshot, setLastDocumentSnapshot] = useState(null);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);
  const [isDataRequest, setIsDataRequest] = useState(true);

  useEffect(() => {
    const getData = () => {
      if (isAllDataLoaded) return;
      const db = firebase.firestore();
      let colRef = null;
      if (lastDocumentSnapshot) {
        colRef = db
          .collection('Dogs')
          .startAfter(lastDocumentSnapshot)
          .limit(1);
      } else {
        colRef = db.collection('Dogs').limit(1);
      }

      colRef
        .get()
        .then((documentSnapshots) => {
          documentSnapshots.forEach((doc) => {
            setData((prev) => [...prev, doc.data()]);
          });
          setLastDocumentSnapshot(
            documentSnapshots.docs[documentSnapshots.docs.length - 1],
          );
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
    const {
      current: { children },
    } = wrapperRef;
    const footer = children[children.length - 1];

    if (
      window.scrollY + window.innerHeight >=
      footer.offsetTop + footer.offsetHeight
    ) {
      setIsDataRequest(true);
    }
  };

  useEffect(() => {
    const listener = window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', listener);
  });

  return (
    <StyledSection>
      <StyledH1>Psy do adopcji</StyledH1>
      {!isDataRequest || isAllDataLoaded ? null : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
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

Section.propTypes = {
  wrapperRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
};

Section.defaultProps = {
  wrapperRef: null,
};

export default Section;
