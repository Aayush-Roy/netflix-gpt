// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp31HJq8mdQ6DeTnIW9qUNAN88cXifjaw",
  authDomain: "netflixgpt-e0867.firebaseapp.com",
  projectId: "netflixgpt-e0867",
  storageBucket: "netflixgpt-e0867.firebasestorage.app",
  messagingSenderId: "149595586771",
  appId: "1:149595586771:web:1128612c55924ee4fb9426",
  measurementId: "G-EEY6NKNV8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();