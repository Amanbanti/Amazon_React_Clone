
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAblfCvUUdG8e4KQRgpSUz-RbZg_Zt9_DE",
  authDomain: "clone-86313.firebaseapp.com",
  projectId: "clone-86313",
  storageBucket: "clone-86313.appspot.com",
  messagingSenderId: "381802333922",
  appId: "1:381802333922:web:7eaf154f308b86c14b40bb",
  measurementId: "G-KB0550CCRK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };



