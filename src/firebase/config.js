import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBi_DNaag7MJxGJ7Dmcp2F5KDjmcEsGUVk",
  authDomain: "project-management-f3c01.firebaseapp.com",
  projectId: "project-management-f3c01",
  storageBucket: "project-management-f3c01.appspot.com",
  messagingSenderId: "876052599107",
  appId: "1:876052599107:web:82b0214b13a4ca736f1ff6",
};

// firebase
initializeApp(firebaseConfig);

// firestore
const db = getFirestore();

// auth
const auth = getAuth();

const fbstorage = getStorage();

// timestamo
const timestamp = Timestamp;

export { db, auth, fbstorage, timestamp };
