import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoNZmyP3oBhF9NZLa46UuaDDmRmeDfT6c",
  authDomain: "portfolio-2900b.firebaseapp.com",
  projectId: "portfolio-2900b",
  storageBucket: "portfolio-2900b.firebasestorage.app",
  messagingSenderId: "981368026218",
  appId: "1:981368026218:web:1616710ad45c433dec8613",
  measurementId: "G-VDYNNXW8CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };