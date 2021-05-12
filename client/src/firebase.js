import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
const userRef = firestore.doc(`users/${user.uid}`);
const snapshot = await userRef.get();
const firebaseConfig = {
    apiKey: "AIzaSyBhShhbQJd9MKh9YOIp8m5XLBAobEL8cmI",
    authDomain: "twitter-clone-79741.firebaseapp.com",
    projectId: "twitter-clone-79741",
    storageBucket: "twitter-clone-79741.appspot.com",
    messagingSenderId: "697599610923",
    appId: "1:697599610923:web:712555b1c762f0512ada6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();