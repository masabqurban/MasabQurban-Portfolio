import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoNZmyP3oBhF9NZLa46UuaDDmRmeDfT6c",
  authDomain: "portfolio-2900b.firebaseapp.com",
  projectId: "portfolio-2900b",
  storageBucket: "portfolio-2900b.firebasestorage.app",
  messagingSenderId: "981368026218",
  appId: "1:981368026218:web:1616710ad45c433dec8613",
  measurementId: "G-VDYNNXW8CV"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'portfolio-2900b-70b95');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };