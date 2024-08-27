// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVAXR2UqXAvoVKBJXGDHaouHSq6bHENso",
  authDomain: "finance-tracker-ece17.firebaseapp.com",
  projectId: "finance-tracker-ece17",
  storageBucket: "finance-tracker-ece17.appspot.com",
  messagingSenderId: "785828076378",
  appId: "1:785828076378:web:9450783f6ff078152a3163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const {db} =getFirestore(); // инизиалиция бд firestore
const auth = getAuth(app); // инизиалиция системы верификации
export {db,auth};