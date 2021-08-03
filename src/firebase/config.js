import firebase from "firebase";
// import firestore from "./firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBWvCsoezd9HQBT9wGSc5ZYGGSkX5k7E4E",
    authDomain: "khataapp-d2522.firebaseapp.com",
    projectId: "khataapp-d2522",
    storageBucket: "khataapp-d2522.appspot.com",
    messagingSenderId: "42972545944",
    appId: "1:42972545944:web:96407300b00d47ca6ae1ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;