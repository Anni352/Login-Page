// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcTsI1Q5YdQCjabrwVzvbyf6wH4ZdX4os",
  authDomain: "fir-auth-1132-9cc42.firebaseapp.com",
  projectId: "fir-auth-1132-9cc42",
  storageBucket: "fir-auth-1132-9cc42.appspot.com",
  messagingSenderId: "541296569525",
  appId: "1:541296569525:web:a18da9b09fb25aa8ac22fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };