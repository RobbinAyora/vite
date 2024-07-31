// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAH6bTl4x_cBXzGPa1iwX-Cfpnm2BHxZ08",
  authDomain: "bulls-empire.firebaseapp.com",
  projectId: "bulls-empire",
  storageBucket: "bulls-empire.appspot.com",
  messagingSenderId: "338016895017",
  appId: "1:338016895017:web:86a6e887d0999547279c38",
  measurementId: "G-5EHDHK2FLL"
};


const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
