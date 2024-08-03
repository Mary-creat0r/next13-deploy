// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXJyNDQMhqu_4iLJ7L25xTREt5Ntwtr8",
  authDomain: "inv-tracker-cd0da.firebaseapp.com",
  projectId: "inv-tracker-cd0da",
  storageBucket: "inv-tracker-cd0da.appspot.com",
  messagingSenderId: "1034246581853",
  appId: "1:1034246581853:web:b654a893af43377edba7b4",
  measurementId: "G-YJWLZ1VGMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}