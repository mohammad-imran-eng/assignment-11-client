// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6957eYvNkBC466gLgn_hj_tSLJjgNCvE",
  authDomain: "tutors-1d032.firebaseapp.com",
  projectId: "tutors-1d032",
  storageBucket: "tutors-1d032.firebasestorage.app",
  messagingSenderId: "584495954903",
  appId: "1:584495954903:web:eb1532a0aa4c02b061a992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);