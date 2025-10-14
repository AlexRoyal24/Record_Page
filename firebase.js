// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMOjgT0Mb-bcA9fNlc23dc1DSKeyFPc1Y",
  authDomain: "recordpage-e86a1.firebaseapp.com",
  projectId: "recordpage-e86a1",
  storageBucket: "recordpage-e86a1.firebasestorage.app",
  messagingSenderId: "67394429287",
  appId: "1:67394429287:web:30ff1f8d82081feac2cfc2",
  measurementId: "G-W701BTFM3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
