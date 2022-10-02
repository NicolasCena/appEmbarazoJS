// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKrElIIHmnLqH2SPsftA1ZfSSRI2Qay84",
  authDomain: "embarazoreactnative.firebaseapp.com",
  projectId: "embarazoreactnative",
  storageBucket: "embarazoreactnative.appspot.com",
  messagingSenderId: "1088217441523",
  appId: "1:1088217441523:web:b456a23264b0a2e54c8386"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);