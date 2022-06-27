import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8vyNXLPWfO6Gdr-6EDKmGvrGWYx6JTtg",
  authDomain: "clone-bbbb6.firebaseapp.com",
  projectId: "clone-bbbb6",
  storageBucket: "clone-bbbb6.appspot.com",
  messagingSenderId: "295980701330",
  appId: "1:295980701330:web:37c24771ae576a1b97f84b",
  measurementId: "G-Z8HGYDKE92",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
