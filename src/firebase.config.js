// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth}from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "AIzaSyBOfzX400UYh7OpQWIX33CGKkOYleJyxeA",
  // apiKey:  process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: "labnote-fb63c.firebaseapp.com",
  projectId: "labnote-fb63c",
  storageBucket: "labnote-fb63c.appspot.com",
  messagingSenderId: "721196793868",
  appId: "1:721196793868:web:bd94c5388dd463cb0e6e29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const db = getFirestore(app);
