// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAPhIPm8Bqf0t1zVxF5BF9dvYpKT4z-CM",
  authDomain: "reksti-smart-cafe.firebaseapp.com",
  projectId: "reksti-smart-cafe",
  storageBucket: "reksti-smart-cafe.appspot.com",
  messagingSenderId: "119010059069",
  appId: "1:119010059069:web:725533940b98f460b59b54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;