// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Authentication
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaUo7e7KgvS0WnriXETEHBfbMU584g0Ng",
  authDomain: "student-fees-d461e.firebaseapp.com",
  databaseURL: "https://student-fees-d461e-default-rtdb.firebaseio.com",
  projectId: "student-fees-d461e",
  storageBucket: "student-fees-d461e.appspot.com",
  messagingSenderId: "469146940871",
  appId: "1:469146940871:web:eb64d38b6413539a53d5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

