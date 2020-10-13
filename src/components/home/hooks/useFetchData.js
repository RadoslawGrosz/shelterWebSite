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
        const documentSnapshots = await colRef.get();
        if (!documentSnapshots[0]) {
          setIsAllDataLoaded(true);
          return;
        }
        documentSnapshots.forEach((doc) => {
          setData((prev) => [...prev, doc.data()]);
        });
        setLastDocumentSnapshot(
          documentSnapshots.docs[documentSnapshots.docs.length - 1],
        );
        const lastDocument = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        const next = db.collection('Dogs').startAfter(lastDocument).limit(fetchDocLimit);
        const nextDocumentSnapshots = await next.get();
        if (nextDocumentSnapshots.empty) setIsAllDataLoaded(true);
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
