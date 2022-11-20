import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl6FnGL5sR7FKzDXA1ocgvV-gm6pYZg0w",
  authDomain: "entrytask-womanup.firebaseapp.com",
  databaseURL: "https://entrytask-womanup-default-rtdb.firebaseio.com",
  projectId: "entrytask-womanup",
  storageBucket: "entrytask-womanup.appspot.com",
  messagingSenderId: "7854418040",
  appId: "1:7854418040:web:27c75bf4d06db724ba258d",
  measurementId: "G-PTZGNM8DPS",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const db = getFirestore(app);
