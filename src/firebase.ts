import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyC0mGwkLr207s2ywH4rv4Yotf_CPIImA5c",
  authDomain: "testing-12-7b733.firebaseapp.com",
  projectId: "testing-12-7b733",
  storageBucket: "testing-12-7b733.appspot.com",
  messagingSenderId: "260051210446",
  appId: "1:260051210446:web:02c49c3e8366c4b727009f",
  measurementId: "G-PZE62HGJ5N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
