import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBoMuscCYxO_ilFME-z-JhRYExAjinr2sc',
  authDomain: 'shelter-website-ef8bf.firebaseapp.com',
  databaseURL: 'https://shelter-website-ef8bf.firebaseio.com',
  projectId: 'shelter-website-ef8bf',
  storageBucket: 'shelter-website-ef8bf.appspot.com',
  messagingSenderId: '89923005928',
  appId: '1:89923005928:web:26ad09b4fcf4de19d6885d',
  measurementId: 'G-F68MTH5NWP',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
