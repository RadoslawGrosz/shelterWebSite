/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import firebase from '../../../server/firebase';

const useFetchData = (setData) => {
  const [lastDocumentSnapshot, setLastDocumentSnapshot] = useState(null);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);
  const [isDataRequest, setIsDataRequest] = useState(true);
  const fetchDocLimit = 2;

  useEffect(() => {
    const getData = async () => {
      if (isAllDataLoaded) return;
      window.scrollTo(0, window.scrollY + window.innerHeight - 100);
      const db = firebase.firestore();
      let colRef = null;
      if (!lastDocumentSnapshot) {
        colRef = db.collection('dogs').limit(fetchDocLimit);
      } else {
        colRef = db.collection('dogs').startAfter(lastDocumentSnapshot).limit(fetchDocLimit);
      }

      try {
        const querySnapshot = await colRef.get();
        console.log('getting snapshot');
        if (querySnapshot.empty) {
          setIsAllDataLoaded(true);
          return;
        }
        querySnapshot.forEach(async (doc) => {
          const data = await doc.data();
          data.id = doc.id;
          setData((prev) => [...prev, data]);
        });
        setLastDocumentSnapshot(
          querySnapshot.docs[querySnapshot.docs.length - 1],
        );
        const lastDocument = querySnapshot.docs[querySnapshot.docs.length - 1];
        const next = db.collection('dogs').startAfter(lastDocument).limit(fetchDocLimit);
        const nextQuerySnapshot = await next.get();
        console.log('getting next snapshot');
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
