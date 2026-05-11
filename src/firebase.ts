import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbl2GlBosoBB4_xo7BdvJTHlOSoJ7AjT4",
  authDomain: "adc-portal-29fb3.firebaseapp.com",
  projectId: "adc-portal-29fb3",
  storageBucket: "adc-portal-29fb3.firebasestorage.app",
  messagingSenderId: "206138284974",
  appId: "1:206138284974:web:944f4d5147e7743fce463f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export const auth = getAuth(app);

// --- NEW: PHASE 1 OFFLINE MEMORY ---
// This tells the browser to save a local copy of the database.
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.log('Multiple tabs open, memory only works in one tab at a time.');
    } else if (err.code == 'unimplemented') {
      console.log('This browser does not support offline memory.');
    }
  });
// -----------------------------------

console.log('Firebase Handshake & Memory Successful!');
