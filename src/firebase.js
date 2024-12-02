// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtCHCOuKIYWwk7hGRapfGHN2-od382OwU",
  authDomain: "pob-apps-95768.firebaseapp.com",
  projectId: "pob-apps-95768",
  storageBucket: "pob-apps-95768.firebasestorage.app",
  messagingSenderId: "1011562191188",
  appId: "1:1011562191188:web:b02c5594e917f81195d0c1",
  measurementId: "G-4S84SMGH7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
