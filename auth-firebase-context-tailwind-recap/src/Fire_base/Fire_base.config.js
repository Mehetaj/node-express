// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAekP-wA5j2i2ooSEEbRYLB0wNhz5KpDQ",
  authDomain: "auth-firebase-context-recap.firebaseapp.com",
  projectId: "auth-firebase-context-recap",
  storageBucket: "auth-firebase-context-recap.appspot.com",
  messagingSenderId: "947405633405",
  appId: "1:947405633405:web:716a56b71ebef05eb73e14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;