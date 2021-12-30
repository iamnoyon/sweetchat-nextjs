import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDR_Bdpj5Pm1vwS8HTa0B2HM_JcC3JTz7M",
    authDomain: "sweetchatapps.firebaseapp.com",
    projectId: "sweetchatapps",
    storageBucket: "sweetchatapps.appspot.com",
    messagingSenderId: "248866694348",
    appId: "1:248866694348:web:84a6f28a46dd52c3b30e69",
    measurementId: "G-BD8QTFT6E8"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };