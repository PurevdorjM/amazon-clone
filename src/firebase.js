import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAoBU5iCGYsGlwiE1VMytP7mfziHCZsPAY",
    authDomain: "challenge-e9aa3.firebaseapp.com",
    projectId: "challenge-e9aa3",
    storageBucket: "challenge-e9aa3.appspot.com",
    messagingSenderId: "544082049220",
    appId: "1:544082049220:web:b63e40452b957f75ac3191",
    measurementId: "G-Q6SQ9M705X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };