import React from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, serverTimestamp, set } from "firebase/database";

export default FirebaseIntegration = () => {

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQn3vrXAK-vAhZkP0H0moDdTATSV1x2WM",
    authDomain: "solarpunkcity-f1096.firebaseapp.com",
    projectId: "solarpunkcity-f1096",
    storageBucket: "solarpunkcity-f1096.appspot.com",
    messagingSenderId: "798246353115",
    appId: "1:798246353115:web:b94b97442fb658e211b4fe"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  const database = getDatabase();
  
}
