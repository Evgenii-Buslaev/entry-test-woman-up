import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./components/App/App";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export const db = getDatabase(app);
