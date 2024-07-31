// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwspoh8eLCiLS2Fyd4gExcAHMjzVzBZDk",
  authDomain: "portfolio-xerxi.firebaseapp.com",
  projectId: "portfolio-xerxi",
  storageBucket: "portfolio-xerxi.appspot.com",
  messagingSenderId: "692495027322",
  appId: "1:692495027322:web:a0c833ced7b1add076bfc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
