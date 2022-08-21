// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbcIHCX1hGHMATb5t-tZqTprLiaLxp2EQ",
  authDomain: "futbol-shop-7aff8.firebaseapp.com",
  projectId: "futbol-shop-7aff8",
  storageBucket: "futbol-shop-7aff8.appspot.com",
  messagingSenderId: "307500929073",
  appId: "1:307500929073:web:67ae59bed90f20db1e4510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)