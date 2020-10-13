import { useState, useEffect } from 'react';
import firebase from '../../../server/firebase';

const useFetchData = (setData) => {
  const [lastDocumentSnapshot, setLastDocumentSnapshot] = useState(null);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);
  const [isDataRequest, setIsDataRequest] = useState(false);
  const fetchDocLimit = 2;

  useEffect(() => {
    const getData = async () => {
      if (isAllDataLoaded) return;
      const db = firebase.firestore();
      let colRef = null;
      if (!lastDocumentSnapshot) {
        colRef = db.collection('Dogs').limit(fetchDocLimit);
      } else {
        colRef = db.collection('Dogs').startAfter(lastDocumentSnapshot).limit(fetchDocLimit);
      }

      try {
        const querySnapshot = await colRef.get();
        if (querySnapshot.empty) {
          setIsAllDataLoaded(true);
          return;
        }
        querySnapshot.forEach((doc) => {
          setData((prev) => [...prev, doc.data()]);
        });
        setLastDocumentSnapshot(
          querySnapshot.docs[querySnapshot.docs.length - 1],
        );
        const lastDocument = querySnapshot.docs[querySnapshot.docs.length - 1];
        const next = db.collection('Dogs').startAfter(lastDocument).limit(fetchDocLimit);
        const nextQuerySnapshot = await next.get();
        if (nextQuerySnapshot.empty) setIsAllDataLoaded(true);
        setIsDataRequest(false);
      } catch (err) {
        throw new Error(err);
      }
    };

    if (isDataRequest) getData();
  }, [isDataRequest]);

  return [isDataRequest, setIsDataRequest, isAllDataLoaded];
};

export default useFetchData;
