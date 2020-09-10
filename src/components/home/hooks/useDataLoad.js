// import { useState, useEffect } from 'react';
// import firebase from '../../../server/firebase';

// const useDataLoad = (setDogsInfo, isDataLoaded, setIsDataLoaded) => {
//   const [lastData, setLastData] = useState(null);

//   useEffect(() => {
//     const db = firebase.firestore();
//     const colectionRef = db.collection('Dogs').limit(1);
//     if (lastData) colectionRef.startAfter(lastData);

//     colectionRef.get().then((documentSnapshots) => {
//       documentSnapshots.forEach((doc) => {
//         setDogsInfo((prev) => [...prev, doc.data()]);
//       });
//       setLastData(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
//     })
//       .then(() => setIsDataLoaded(true));
//   }, [isDataLoaded]);
// };

// export default useDataLoad;
