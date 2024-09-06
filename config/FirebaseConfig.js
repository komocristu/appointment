// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "appointment-app-ad7b1.firebaseapp.com",
  projectId: "appointment-app-ad7b1",
  storageBucket: "appointment-app-ad7b1.appspot.com",
  messagingSenderId: "336636602787",
  appId: "1:336636602787:web:33aa06c124edb1a5775216",
  measurementId: "G-8KMFK5LEQZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);