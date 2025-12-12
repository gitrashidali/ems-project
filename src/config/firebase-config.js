// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD487wK55wEeLFe3Ax3t2Dic9wniWIx7gk",
    authDomain: "emswknd-29e12.firebaseapp.com",
    projectId: "emswknd-29e12",
    storageBucket: "emswknd-29e12.firebasestorage.app",
    messagingSenderId: "1070793018218",
    appId: "1:1070793018218:web:1f319afa3e003040d6f313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect Firestore Database
export const db = getFirestore(app);

export default app;
