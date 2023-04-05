import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCIH6AHBSQXK9ws-xPDUbOSBREGUEsJ9UY",
  authDomain: "tiktok---clone-6f0a7.firebaseapp.com",
  projectId: "tiktok---clone-6f0a7",
  storageBucket: "tiktok---clone-6f0a7.appspot.com",
  messagingSenderId: "1032491958127",
  appId: "1:1032491958127:web:9691dbdf82aee52cb3b29a"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

