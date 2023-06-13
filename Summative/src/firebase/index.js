// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQcoFwS4wxzH_4kelS1UINjHJY116ozaw",
  authDomain: "summative-d2805.firebaseapp.com",
  projectId: "summative-d2805",
  storageBucket: "summative-d2805.appspot.com",
  messagingSenderId: "991154419596",
  appId: "1:991154419596:web:a8050fe7446de6f32d88a9",
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);
