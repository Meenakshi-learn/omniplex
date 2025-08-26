import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
    apiKey: "AIzaSyAIXl8kbl_8EdjN-OuN0UgizRkAf-4Yz_k",
    authDomain: "omniplex-assignment-ec8db.firebaseapp.com",
    projectId: "omniplex-assignment-ec8db",
    storageBucket: "omniplex-assignment-ec8db.firebasestorage.app",
    messagingSenderId: "339657798381",
    appId: "1:339657798381:web:2aaa22f35215c2a474d2e4",
    measurementId: "G-VCL7NG4T74"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
